// import { icons } from "lucide-react";

const Template = [
    {
        name: 'Blog Title',
        desciption: 'An AI tool that generates a title for you blog',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2800/2800015.png',
        aiprompt: 'give me 5 blog topic idea in bullet wise only based on niche & outline topic and give me result in rich text editor format',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                name: 'niche',
                field: 'input',
                required: true,
            },
            {
                label: 'Enter your blog outline',
                name: 'outline',
                field: 'text',
            },
        ]
    },
    {
        name: 'Blog Content',
        desciption: 'An AI tool that generates a blog content according to your description',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2593/2593510.png',
        aiprompt: 'give me a blog which is only based on description & outline and give me result in rich text editor format',
        slug: 'generate-blog-content',
        form: [
            {
                label: 'Enter your blog description',
                name: 'description',
                field: 'input',
                required: true,
            },
            {
                label: 'Enter your blog outline',
                name: 'outline',
                field: 'text',
            },
        ]
    },
    {
        name: 'You-Tube Video Title',
        desciption: 'An AI tool that generates a Youtube video title according to your description',
        category: 'Youtube',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiprompt: 'give me a youtube seo title which is only based on description & outline and give me result in rich text editor format',
        slug: 'generate-SEO-title',
        form: [
            {
                label: 'Enter your video description',
                name: 'description',
                field: 'input',
                required: true,
            },
            {
                label: 'Enter your blog outline',
                name: 'outline',
                field: 'text',
            },
        ]
    },
    {
        name: 'Youtube Description',
        desciption: 'An AI tool that generates a youtube description according to your video title and description',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2593/2593510.png',
        aiprompt: 'give me a blog which is only based on title & outline and give me result in rich text editor format',
        slug: 'generate-video-description',
        form: [
            {
                label: 'Enter your video Title',
                name: 'title',
                field: 'input',
                required: true,
            },
            {
                label: 'Enter your blog outline',
                name: 'outline',
                field: 'text',
                required: true,
            },
        ]
    },
    {
        name: 'Text Improver',
        desciption: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiprompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove',
                required: true,
            }
        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desciption: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        category: 'blog',
        slug: 'instagram-hash-tag-generator',
        aiprompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keywords',
                required: true
            },

        ]
    },
    {

        name: 'Youtube Description',
        desciption: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'youtube-description',
        aiprompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter youtube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'English Grammer Check',
        desciption: 'AI Model to Correct your english grammer by providing the text',
        icon: 'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: 'english',

        slug: 'english-grammer-checker',
        aiprompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter text to correct the grammer',
                field: 'input',
                name: 'inputText',
                required: true
            },

        ]
    },
    {
        name: 'Write Code',
        desciption: 'AI Model to generate programming code in any language',
        icon: 'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Coding',
        slug: 'write-code',
        aiprompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter description of code you want along with Programming Lang',
                field: 'text',
                name: 'codeDesscripton',
                required: true
            },

        ]
    },
    {
        name: 'Explain Code',
        desciption: 'AI Model to explain programming code in any language',
        icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Coding',
        slug: 'explain-code',
        aiprompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'text',
                name: 'codeDesscripton',
                required: true
            },

        ]
    },
    {
        name: 'Code Bug Detector',
        desciption: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
        icon: 'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
        category: 'code-bug-detector',

        slug: 'code-bug-detector',
        aiprompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to test bug',
                field: 'text',
                name: 'codeInput',
                required: true
            },

        ]
    },
]

export default Template
