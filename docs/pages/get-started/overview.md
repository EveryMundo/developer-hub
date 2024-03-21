---
---

# What's Developer Hub?

**Developer Hub** is an enterprise ecosystem designed for the creation and distribution of _airModules_. At its core, the **Developer Hub** is a platform that empowers developers to build, share, and deploy innovative solutions in the travel industry. The ecosystem leverages cutting-edge technologies to provide a robust and flexible environment where creativity meets functionality.

In this section, we'll dive into the key concepts and features of the **Developer Hub**, explaining how it revolutionizes the development process and fosters a community of collaboration and innovation.

## Key Concepts

Module:
- [**airModules**](https://everymundo.github.io/docs/airmodules/introduction/what-is-it): Modular components at the heart of **Developer Hub**. In this documentation we will use _airModules_ and modules interchangeably.  They facilitate the seamless integration and customization of digital experiences, offering scalable and efficient solutions to improve existing systems or develop new applications. From a technical point of view, an _airModule_ is published as a web application embedded in an _Iframe_ with three main requirements: an `index.html` file, a `setup.json` file and the use of the **Registry Script** library. In the future, _airModules_ can also be published as web components, expanding their versatility and integration possibilities.

Digital contract:
- [**Setup.json**](/learning/setup-file): This JSON file acts as a vital contract between the module and the system. It technically describes  module settings, integration with the design system, label definitions, API usage, resource permissions, ...


Command line
- [**Registry CLI**](/learning/registry-cli): A command-line interface tool that facilitates module management. It enables developers to push modules, define new modules, log into the system, and request QA reviews.


Tools:
- [**Editor**](/learning/editor): This tool allows for the editing of the `setup.json` file and provides a visual interface to preview settings, styles, labels, and more, without implementing the module.

- [**Playground**](/learning/playground): A development and testing sandbox where modules can be run independently of the ecosystem integration, offering a flexible environment for experimentation.


Libraries:

- [**Registry Script**](/learning/registry-script): A mandatory library that enables communication between the module and the surrounding system.
  
- **Adnetify Script**: While not directly used by developers, understanding this library is beneficial. It helps embed modules as iframes on web pages.

These concepts are fundamental to understanding and working within the Developer Hub. Each concept will be explained in more detail in dedicated sections of this documentation.
