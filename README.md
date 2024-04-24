# [hawk.codes](https://hawk.codes/)

This repository contains the source code for the [hawk.codes](https://hawk.codes/) site. In addition to being the primary website of Hawks Code Computer Science Club, the site is also intended to be a collaborative project that is maintained by the entire club.

The website is written in the Astro framework and is deployed as a static site after undergoing the build process.

You do not need to know web development to contribute to this site. In fact, you do not even necessarily need to know anything about programming. See the [Contributing](#Contributing) section below.

## Objectives

Broadly speaking, the goals of this website are as follows until further discussed and revised:

- Bring additional attention to the club
- Persuade prospective members to join the Discord server and attend in-person meetings
- Provide an easy means for prospective members to join
- Show the dates, times, and locations of upcoming events and meetings
- Showcase any projects that the club has worked on
- Offer links to useful computer science resources

In order to remain useful, the site should be designed to allow for easy maintenance. Only minimal technical knowledge should be required to update basic information such as events, projects, and the contents of pages. Therefore, much of the content should eventually be abstracted into Markdown files in the `src/content` directory to allow for easy editing.

## Contributing

There are several ways to contribute to this project:

- **Writing issues in the 'issues' tab of this repository.** In an issue, you can request that specific content or details be added to the site. You may also critique its current contents or design. It is not obvious what the site should contain or what it should look like, so any work put into making those decisions is more than welcome. No knowledge of programming or web development is necessary to raise an issue.
- **Editing the Markdown content in the `src/content` directory.** Most of the text-based content of the site will eventually be in this directory. You will need basic knowledge of Markdown, which is fairly simple and can be learned in an afternoon. Knowledge of GitHub will also be useful, as you'll be making changes and commits directly from the GitHub editor.
- **Development.** If you happen to know web development, you are welcome to apply that knowledge here. If you don't know web development but are interested in learning, then hopefully this project can help you to develop those abilities.

### Project Standards

For this project, the following should be considered as best practices for the sake of organization and maintainability. These standards can be disputed and removed/replaced if they are found to be unsuitable.

- All Markdown files should go into `src/content`, and the `src/content` directory should not contain any files that are not Markdown. This will ensure that the frequently-updated content of the site is easy to find.
- Given that the `src/pages` directory defines the routing of the site, the files in that directory should be kept as simple as possible. Ideally, they should consist only of a layout (found in `src/layouts`) that wraps a component (found in `src/components`). Of course, any other logic that is relevant to routing should also be included.
- Although Astro treats the `src/components` and `src/layouts` directories identically, `layouts` should be used to define overarching page structure while `components` should be used to define the main content (excluding Markdown, though components might wrap Markdown) of pages.
- If a component contains subcomponents, then the directory in which the original component is defined should contain a `components` subdirectory. Each `components` directory should contain a subdirectory for each subcomponent.

### Development

This section will guide you through the process of setting up a local instance of the site that runs on your own computer. This is necessary if you wish to contribute code beyond just Markdown, or if you just want to mess around with a personal copy of the site.

For this section only, basic knowledge of interacting with a terminal is assumed. Knowledge of Git will also be helpful, and is covered [here](https://github.com/Hawks-Code/Git-Crash-Course).

#### Tools Required

If you are working with the source code, you’ll need the following tools installed on your computer at minimum:

- **NodeJS and NPM.** NPM comes bundled with NodeJS by default, so you don’t need to do two separate installations. After installing, you can verify that the installation worked by running `npm --version` and `node --version` in a terminal. If these commands show a version number, then the installation was successful.
  - For Windows: Go to [the NodeJS website](https://nodejs.org/en/download) and download an installer that is appropriate for your device architecture and operating system. During installation, you will see an option that allows you to specify whether you wish to add NodeJS to your PATH environment variable. **Make sure that you add NodeJS to your PATH**. This will allow you to access Node and NPM from your terminal.
  - For MacOS: You can use the same approach as the one outlined for Windows, if you would like. If you have [Homebrew](https://brew.sh/), then you can also install Node (and NPM) by entering `brew install node` into a terminal.
- **Git.** You can check whether Git is correctly installed on your computer by entering `git --version` into a terminal. Details on installation and usage are covered [here](https://github.com/Hawks-Code/Git-Crash-Course).

#### Setting Up A Development Environment

You’ll first need to bring the source code of this repository onto your local machine. If you are just testing stuff out and messing around, you can clone this repository by running `git clone https://github.com/Hawks-Code/hawks-code.github.io.git` in a terminal. If you are planning on eventually making a pull request and merging your changes, you’ll want to first fork this repository and then clone your fork.

After cloning the repository, run the following:

- `cd hawks-code.github.io`. This command may be different or unnecessary depending on how you ran your `git clone`. In essence, you should make sure that your working directory is the root project directory; this should be the same one that contains the `package.json` file.
- `npm install`.
- `npm run dev`. This will start the development server. Note that the `dev` script is one of several defined in the `package.json` file.

Your terminal should show a URL. If you open the URL with a web browser, you should find a local instance of the site running on your own machine. At this point, any changes that you make to the code will be reflected in your local instance of the site.

## Resources, Tools, and Libraries Used

This section discusses the various technologies used on the site, and contains links to relevant documentation and tutorials. If you wish to learn more about how the website works, then you may find the links below to be helpful.

### Markdown

Much of the content of this site will eventually be written in Markdown. Therefore, knowing Markdown by itself should be sufficient to add content to the site. All of the Markdown files for the site (other than this readme) are located in the `src/content` directory of the project.

- A good interactive tutorial can be found [here](https://www.markdowntutorial.com/).
- If you prefer to learn from videos, [this one](https://www.youtube.com/watch?v=_PPWWRV6gbA) may be helpful.
- The same person who made the above video also wrote an interactive blog article on the subject, found [here](https://blog.webdevsimplified.com/2023-06/markdown-crash-course/).

### Basic Web Development Technologies

HTML, CSS, and JavaScript are fundamental to frontend web development. They will be necessary for anyone interested in editing more than just Markdown documents. Typically, it is considered best to learn HTML first, followed by CSS, followed by JavaScript.

There is an abundance of online tutorials for basic web development.

- There are so many that Free Code Camp has [a whole playlist of them](https://www.youtube.com/watch?v=kUMe1FH4CHE&list=PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88).
- W3Schools has an HTML tutorial [here](https://www.w3schools.com/html/default.asp), a CSS tutorial [here](https://www.w3schools.com/css/default.asp), and a JavaScript tutorial [here](https://www.w3schools.com/js/default.asp).

### Astro

Astro is the framework that our website uses. It enables us to break our code into components and use Markdown for our content. It also defines the organization of our `src` directory, so understanding Astro is important to understanding the organization of our website as a whole.

Astro is well-suited for static websites such as blogs, and is less preferable for apps that are highly interactive. Our site contains largely static content and isn’t particularly interactive, so it’s a good use-case for Astro.

- Astro has excellent documentation, which can be found [here](https://docs.astro.build/en/getting-started/).
- If you prefer a video tutorial, you may find [this one](https://www.youtube.com/watch?v=e-hTm5VmofI) to be helpful.

You may find it difficult to learn Astro if you do not already have a basic understanding of HTML, CSS, and JavaScript.

### Tailwind CSS

Tailwind CSS (or “Tailwind” for short) is a CSS framework that allows for maintainable inline styling. Although Tailwind is an abstraction over CSS, it still gives the programmer complete control over styling decisions. As such, it is important to understand basic CSS in order to understand Tailwind.

- Much like Astro, Tailwind has [excellent documentation](https://tailwindcss.com/docs/installation). A lot of the specific details of Tailwind are difficult to memorize at first, so learning Tailwind involves referencing the documentation often.
- A video tutorial from Free Code Camp can be found [here](https://www.youtube.com/watch?v=ft30zcMlFao). Bear in mind that video tutorials may not be as helpful for learning Tailwind as they may be for other technologies. If you understand the capabilities of CSS, then you also understand the capabilities of Tailwind; most of your time will be spent learning the Tailwind equivalents of specific CSS features, and it is usually faster to reference the documentation directly.

### TypeScript

TypeScript is a superset of JavaScript that has static types. It is optional for Astro, and you do not need to understand TypeScript to write code in this project. Nonetheless, there are some parts of the site that use TypeScript, and is worth learning once you have a reasonable understanding of JavaScript.

- The documentation can be found [here](https://www.typescriptlang.org/docs/).
- A video tutorial could be quite helpful for learning TypeScript, as TypeScript has a variety of features that can be confusing for newcomers. [Here’s](https://www.youtube.com/watch?v=30LWjhZzg50) another Free Code Camp tutorial.

### Other Technologies

The list below describes technologies that are used by the site, but which play a relatively small role in the overall project.

- [Prettier](https://prettier.io/docs/en/). This is a code formatter, and ensures that all code getting pushed to this repository is formatted in a consistent manner. The file `.prettierrc.mjs` is the configuration file for Prettier.
- [ESLint](https://eslint.org/docs/latest/). This ensures that all JavaScript in the project conforms to particular quality standards. The file `.eslintrc.cjs` is the configuration file.
- [Husky](https://typicode.github.io/husky/) and [Lint-Staged](https://github.com/lint-staged/lint-staged). These two tools are configured to work together to ensure that Prettier and ESLint will always run before allowing any new commits.
- [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages). This is the hosting service that our website uses. The contents of the `.github` directory ensure that the site will automatically redeploy when new code is pushed to the repository.
- [Astro Icon](https://www.astroicon.dev/). This is an Astro plugin which interacts with the `src/icons` directory. Astro Icon enables us to easily use SVGs as icons.
