import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/MasssiveJuice08/tes3cs-manual",
      "Discord": "https://discord.gg/UdM3VrmJsc",
      "Morrowind Modding Wiki": "https://morrowind-modding.github.io/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents()),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({folderClickBehavior: "link"})),
  ],
  right: [
    Component.MobileOnly(Component.Explorer({folderClickBehavior: "link"})),
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta(), Component.MobileOnly(Component.TableOfContents())],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({folderClickBehavior: "link"})),
  ],
  right: [
    Component.MobileOnly(Component.Explorer({folderClickBehavior: "link"})),
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}
