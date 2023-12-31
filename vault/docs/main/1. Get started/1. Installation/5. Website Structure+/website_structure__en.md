
Now it's time to consider the structure of your website, which involves deciding on the Docusaurus modules you want to incorporate.

>[!note] 
>Its possible to add or remove different modules at any stage in the future.


## The First Question: What type of website to you want to build?

### Option 1: Documentation  and Blog Site

The classic use case is to include both a `Docs` module and a `Blog` module.

### Option 2: Docs only

Alternatively, you may choose to only include the docs module.
You can find more information [here](https://docusaurus.io/docs/docs-introduction#docs-only-mode).

### Options 3: Blog only

Lastly, you might prefer to only include the Blog module.
You can find more information [here](https://docusaurus.io/docs/blog#blog-only-mode).


## The Second Question: Do you want multiple sidebars or blogs?

### Multiple Docs Sidebars

For your docs, you have the option to include multiple sidebars, as illustrated in this website which has `main` and `Sidebar 2*`.

### Multiple Blogs

If you decide on a Blog, you can also choose how many. While it's most common to only have one, you do have the option to include multiple blogs, as demonstrated in this website with `Blog` & `Release Notes`.

## The Third Question: Do you want your website to support multiple languages?

Obsidiosaurus enables you to support multiple languages for your website straight from your Obsidian vault. 

For this tutorial, we will create a website in two languages: English (`en`) as the primary language and German (`de`) as a secondary language. 

Refer to this list of [ISO language codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and check with [Docusaurus](https://docusaurus.io/docs/i18n/introduction) to find out the correct language code to use.

## Vault Folder Structure

Once you've decided on the structure of your website, create the necessary folder structure in Obsidian. 

For instance, the folder structure for a website with one docs module, two sidebars, and two blogs could look like this:

```
.
├── website
│   └── ... // your Docusaurus Installation
└── vault
    ├── assets // Your folder for attachments
    ├── docs // FIXED NAME
    │   ├── sidebar1
    │   ├── sidebar2
    │   └── ...
    ├── blog // FIXED NAME
    │   └── ... // your first blog
    ├── second-blog__blog
    │   └── ... // if you want more blog modules add '__blog' at the end
    └── ...
```

>[!caution] Fixed names
> The `docs` and `blog` folders have fixed names.
> For a second blog, you can use any name, but you must add `__blog` at the end.


