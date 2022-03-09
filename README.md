[![test](https://github.com/synionnl/md-docs-cli/actions/workflows/test.yml/badge.svg)](https://github.com/synionnl/md-docs-cli/actions/workflows/test.yml)
[![audit](https://github.com/synionnl/md-docs-cli/actions/workflows/audit.yml/badge.svg)](https://github.com/synionnl/md-docs-cli/actions/workflows/audit.yml)
[![analyze](https://github.com/synionnl/md-docs-cli/actions/workflows/analyze.yml/badge.svg)](https://github.com/synionnl/md-docs-cli/actions/workflows/analyze.yml)
[![release](https://github.com/synionnl/md-docs-cli/actions/workflows/release.yml/badge.svg)](https://github.com/synionnl/md-docs-cli/actions/workflows/release.yml)
[![npm](https://img.shields.io/npm/v/@synion/md-docs.svg)](https://npmjs.org/package/@synion/md-docs)
[![npm](https://img.shields.io/npm/dm/@synion/md-docs.svg)](https://npmjs.org/package/@synion/md-docs)
[![alerts](https://img.shields.io/lgtm/alerts/g/synionnl/md-docs-cli.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/synionnl/md-docs-cli/alerts/)

# Living documentation

See [product documentation](https://docs.synion.nl/products/md-docs-cli/index.html) for more information.

## To get started

```
npm install @synion/md-docs -g
mkdir ../documentation
cd documentation
mkdir docs
echo "# It works!" > docs/index.md
md-docs
google-chrome dist/index.html
```

## Options

### branches only

```
md-docs -b
```

### Custom theme

You can override all assets files by adding the same files to docs folder:  docs/assets/style/custom-theme.css can then be overwritten by a custom theme implementation.

### Skip branches

```
md-docs -s branch1 branch2
```

## To debug

Set the environment to development. All intermediate steps are saved as files in the dist directory.

```
export NODE_ENV=development
```



