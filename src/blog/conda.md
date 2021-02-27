---
title: pyribs now available on Conda
description:
  pyribs is now available on the conda-forge channel under the name pyribs.
author: Bryon Tjanaka
author_url: https://btjanaka.net
date: 2021-02-26t22:00:00-08:00
tags: releases
---

pyribs can now be installed with Conda! It is available on the `conda-forge`
channel. To install the full distribution (equivalent to
`pip install ribs[all]`), run:

```bash
conda install -c conda-forge pyribs
```

To install the base distribution (equivalent to `pip install ribs`), run:

```bash
conda install -c conda-forge pyribs-base
```

<u>_Note that installation only works on Python 3.6-3.8 for now, as there are
still some issues with numba supporting Python 3.9. Refer to this
[GitHub issue](https://github.com/icaros-usc/pyribs/issues/64) for more
info._</u>

Many thanks to the folks at [conda-forge](https://conda-forge.org) for helping
us set up the packages. For further reference, these are the links to the
packages on Anaconda.org:

- [pyribs](https://anaconda.org/conda-forge/pyribs)
- [pyribs-base](https://anaconda.org/conda-forge/pyribs-base)

And these are the links to the feedstocks for the packages:

- [pyribs feedstock](https://github.com/conda-forge/pyribs-feedstock)
- [pyribs-base feedstock](https://github.com/conda-forge/pyribs-base-feedstock)
