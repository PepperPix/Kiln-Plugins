# Kiln-Plugins

First-party content plugins for [Kiln](https://github.com/PepperPix/Kiln), Kiln's static site
generator for .NET. Each plugin is distributed as its own NuGet package, tagged `kiln-plugin` on
nuget.org, and versioned independently of Kiln itself and of the other plugins in this repository.

**Status:** Early development — plugins are added incrementally.

## Plugins in this repository

- `email-protect` — obfuscates email addresses in generated HTML to reduce scraping by spam bots.
  (Package and content follow separately; not yet published from this repository.)

## Installation

Once the Kiln CLI supports plugin management, plugins in this repository will be installable
directly:

```bash
kiln plugin add Kiln.Plugin.EmailProtect
```

Until then, install the plugin's NuGet package manually using the package name listed above (e.g.
`Kiln.Plugin.EmailProtect`) once it has been published.

## Versioning

Each plugin has its own release cadence: a change to one plugin does not trigger a release for
another, and plugin releases are independent of Kiln's own version. See
[CONTRIBUTING.md](CONTRIBUTING.md) for the commit conventions this depends on.

## License

Licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) and [NOTICE](NOTICE).
