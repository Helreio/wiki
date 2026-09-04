import { QuartzTransformerPlugin } from "../types"

export const InlineProperties: QuartzTransformerPlugin = () => {
    return {
        name: "InlineProperties",
        textTransform(_ctx, src) {
            // 1. Locate the frontmatter block at the very top of your document
            const frontmatterMatch = src.match(/^---([\s\S]*?)---/)
            if (!frontmatterMatch) return src

                // 2. Extract every property into a working dictionary
                const yamlText = frontmatterMatch[1]
                const frontmatter: Record<string, string> = {}

                yamlText.split("\n").forEach(line => {
                    const separatorIndex = line.indexOf(":")
                    if (separatorIndex !== -1) {
                        const key = line.substring(0, separatorIndex).trim()
                        let value = line.substring(separatorIndex + 1).trim()
                        // Strip enclosing quotes from text fields automatically
                        value = value.replace(/^["']|["']$/g, "")
                        frontmatter[key] = value
                    }
                })

                // 3. Scan the text body and swap out any instance of {{property_name}}
                return src.replace(/\{\{([^}]+)\}\}/g, (match, expression) => {
                    const cleanKey = expression.trim()
                    return frontmatter[cleanKey] !== undefined ? frontmatter[cleanKey] : match
                })
    },
}
}
