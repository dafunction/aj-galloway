import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { RotatingGlobe } from "."

interface PageTitleOptions {
  hideOnRoot: boolean
}

const defaultOptions: PageTitleOptions = {
  hideOnRoot: true,
}

export default ((userOpts?: Partial<PageTitleOptions>) => {
  const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
    const opts = { ...defaultOptions, ...userOpts }
    const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
    const baseDir = pathToRoot(fileData.slug!)
    const isRoot = fileData.slug === "index"

    return (
      <h1 class={classNames(displayClass, "page-title")}>
        <a href={baseDir} aria-label="Home">
          <RotatingGlobe id="rotating-globe" interval={500} />
        </a>
        {/* {(!opts.hideOnRoot || !isRoot) && <div>{title}</div>} */}
      </h1>
    )
  }

  PageTitle.css = `
  .page-title {
    margin: 0;
    display: flex;
    align-items: flex-start;
  }

  .page-title a {
    margin-right: 1rem;
  }
  `

  return PageTitle
}) satisfies QuartzComponentConstructor
