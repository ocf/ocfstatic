import { type ReactNode } from "react"

export const SEO = ({
  title,
  children,
}: {
  title?: string
  children?: ReactNode
}) => {
  return (
    <>
      <title>
        {title}
        {title && " - "}Open Computing Facility
      </title>
      <link
        rel="icon"
        href="/assets/img/favicon/favicon-16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        href="/assets/img/favicon/favicon-32.png"
        sizes="32x32"
      />
      {children}
    </>
  )
}
