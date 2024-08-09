import { Options } from "./quartz/components/ExplorerNode"

// custom sort order for folders to match original docs
export const sortFn: Options["sortFn"] = (a, b) => {
    const nameOrderMap: Record<string, number> = {
      "getting-started": 100,
      "data-files": 200,
      "building-and-editing": 300,
        "world": 301,
        "main-editing-windows": 302,
        "landscape": 303,
      "objects": 400,
        "object-types": 401,
        "reference-data": 402,
      "actors": 500,
        "character": 501,
        "creature": 502,
        "dialogue": 503,
        "ai": 504,
      "gameplay": 600,
        "scripting": 601
    }
 
    let orderA = 700
    let orderB = 700
 
    if (a.file && a.file.slug) {
      orderA = nameOrderMap[a.file.slug] || 700
    } else if (a.name) {
      orderA = nameOrderMap[a.name] || 700
    }
 
    if (b.file && b.file.slug) {
      orderB = nameOrderMap[b.file.slug] || 700
    } else if (b.name) {
      orderB = nameOrderMap[b.name] || 700
    }
 
    return orderA - orderB
}