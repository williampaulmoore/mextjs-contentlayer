import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: 'blog/**/*.md',  // What to look for under source content directory
    fields: {
        title        : { type: 'string', required: true },
        description  : { type: 'string', required: true },
        published    : { type: 'boolean', default: true },
    },
    /** import {('contentlayer/source-files').ComputedFields}  */
    computedFields: {
        slug : {
            type: 'string',
            resolve: (doc) => `/${doc._raw.filePathPattern}`,
        },
        slugAsParams: {
            type: 'string',
            resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
        },
    }
}))

export default makeSource({
    contentDirPath: 'src/content', // root path for all document types
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm],  // Github markdown
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: 'github-dark',
                    onVisitLine(node) {
                        if(node.children.lenth === 0) {
                            mode.children = [{ type: 'text', value: ' ' }]
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push('line--highlighted')
                    },
                    onVisitHighlightedWord(node) {
                        node.properties.className = ['word--highlighted']
                    },
                }
            ],
        ], 
    }
})
