import { ConditionalPick, ValueOf } from "type-fest"
import { paths } from "~/definitions/ocfapi"
import useSWR, { SWRResponse } from "swr"

type HTTP2xxCodes = 200 | 201 | 202 | 203 | 204 | 205 | 206

type ApiRouteResponse<Responses> = SWRResponse<
  ValueOf<Responses, Extract<keyof Responses, HTTP2xxCodes>> extends {
    content: { "application/json": infer Data }
  }
    ? Data
    : null,
  // FIXME: temporary; update for actual error returned from fetcher
  ValueOf<Responses, Exclude<keyof Responses, HTTP2xxCodes>> extends {
    content: { "application/json": infer Data }
  }
    ? Data
    : null
>
type ParameterValue = string | number

export function getSWRKeyForPath<
  Path extends keyof ConditionalPick<
    paths,
    {
      get: {
        parameters:
          | { path: Record<string, ParameterValue> }
          | { query: Record<string, ParameterValue> }
        responses: Record<number, object>
      }
    }
  >
>(
  path: Path,
  params: paths[Path]["get"] extends { parameters: infer Params }
    ? Params
    : "error"
): string
export function getSWRKeyForPath<
  Path extends keyof ConditionalPick<
    paths,
    { get: { parameters?: never; responses: Record<number, object> } }
  >
>(path: Path): string
export function getSWRKeyForPath<
  Path extends keyof ConditionalPick<
    paths,
    { get: { responses: Record<number, object> } }
  >
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
>(path: Path, _params: any = {}): string {
  // FIXME(etw): I give up on typing params D:
  const params = _params as
    | Record<string, never>
    | { path: Record<string, ParameterValue> }
    | { query: Record<string, ParameterValue> }

  let pathReplaced: string = "/api" + path
  if ("path" in params) {
    for (const param in params.path) {
      pathReplaced = pathReplaced.replaceAll(
        new RegExp(`\\{${param}\\}`),
        params.path[param].toString()
      )
    }
  }

  let queryRendered = ""
  if ("query" in params) {
    queryRendered = `?${new URLSearchParams(
      Object.entries(params.query).map(([key, value]): [string, string] => [
        key,
        value.toString(),
      ])
    ).toString()}`
  }

  return pathReplaced + queryRendered
}

export function useApiRoute<
  Path extends keyof ConditionalPick<
    paths,
    { get: { parameters: object; responses: Record<number, object> } }
  >
>(
  path: Path,
  params: paths[Path]["get"] extends { parameters: infer Params }
    ? Params
    : "error"
): ApiRouteResponse<paths[Path]["get"]["responses"]>
export function useApiRoute<
  Path extends keyof ConditionalPick<
    paths,
    { get: { parameters?: never; responses: Record<number, object> } }
  >
>(path: Path): ApiRouteResponse<paths[Path]["get"]["responses"]>
export function useApiRoute<
  Path extends keyof ConditionalPick<
    paths,
    { get: { responses: Record<number, object> } }
  >
>(
  path: Path,
  params?: paths[Path]["get"] extends { parameters: infer Params }
    ? Params
    : undefined
): SWRResponse {
  // typechecking this is annoying, so we give up instead :)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-explicit-any
  return useSWR(getSWRKeyForPath(path as any, params))
}
