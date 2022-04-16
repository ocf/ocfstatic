import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react"
import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby"

export type InternalLinkProps<TState> = GatsbyLinkProps<TState> &
  Omit<ChakraLinkProps, "href">

const InternalLink = <TState,>({ to, ...props }: InternalLinkProps<TState>) => (
  <ChakraLink as={GatsbyLink} to={to} {...props} />
)

export default InternalLink
