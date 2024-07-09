import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface ArticleTitleOptions {
  /**
   * Whether to display breadcrumbs on root `index.md`
   */
  hideOnRoot: boolean
}

const defaultOptions: ArticleTitleOptions = {
  hideOnRoot: true,
}

export default ((opts?: Partial<ArticleTitleOptions>) => {
  // Merge options with defaults
  const options: ArticleTitleOptions = { ...defaultOptions, ...opts }

  const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    // Hide title on root if enabled
    if (options.hideOnRoot && fileData.slug === "index") {
      return null
    }

    const title = fileData.frontmatter?.title
    if (title) {
      return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
    } else {
      return null
    }
  }

  ArticleTitle.css = `
  .article-title {
    margin: 2rem 0 0 0;
  }
  `

  return ArticleTitle
}) satisfies QuartzComponentConstructor
