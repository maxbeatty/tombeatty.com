tombeatty.com
=============

A microsite for my dad. Tried to keep it simple (pure node http instead of express, etc.) and tried some new things (like gulp)

### Get Started

Get setup by installing dependencies:

```bash
$ ./script/bootstrap
```

### Gulp Commands

You can now use Gulp with the following commands to stay productive during development:

#### Watch For Changes & Automatically Refresh Across Devices

```sh
$ gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

#### Build & Optimize

```sh
$ gulp
```

Build and optimize the current project, ready for deployment. This includes linting as well as image, script, stylesheet and HTML optimization and minification.

#### Performance Insights

```sh
$ gulp pagespeed
```

Runs the deployed (public) version of your site against the [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) API to help you stay on top of where you can improve.

#### Responsive website screenshots

```sh
$ gulp pageres
```

Capture screenshots of the site in various resolutions thanks to [pageres](https://github.com/sindresorhus/pageres)

### Thanks

- [Web Starter Kit](https://developers.google.com/web/starter-kit/)
