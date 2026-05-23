# Global Cancer Structural Inference Framework

A perturbational structural-geometry framework for high-dimensional transcriptomic organization.

This repository contains the analytical, warehouse, and reporting infrastructure for the Global Cancer Structural Inference Framework.

------------------------------------------------------------------------

## Overview

The Global Cancer Structural Inference Framework investigates cancer as a systems-level perturbation of transcriptomic organization.

Rather than focusing exclusively on differential gene expression, the framework investigates whether malignancy induces reproducible perturbational organization across multiple complementary representations of transcriptomic structure.

These representations include:

- structural complexity,
- informational organization,
- covariance geometry,
- spectral structure,
- nonlinear latent transcriptomic manifolds,
- and functional annotation landscapes projected onto these geometries.

The framework therefore treats malignancy not simply as altered expression, but as large-scale perturbation of transcriptomic organization itself.

------------------------------------------------------------------------

## Structural Engines

| Engine | Structural Interpretation |
|------------------------------------|------------------------------------|
| Complexity | distribution and concentration of transcriptomic organization |
| Entropy | informational organization of covariance structure |
| MP Spectral | departures from random covariance geometry |
| Latent Geometry | nonlinear manifold displacement |

These engines are treated as complementary projections of transcriptomic organization rather than interchangeable metrics.

------------------------------------------------------------------------

## Computational Architecture

``` text
preprocessing
→ structural inference
→ structural synthesis
→ structural concordance
→ structural validation
→ structural robustness
→ structural visualization geometry
→ functional annotation projection
→ structural grammar
```

These stages progressively transform raw transcriptomic measurements into increasingly integrated representations of perturbational structural organization, robustness, semantic projection, and controlled interpretation.

## Structural Geometry Framework

### First-Order Geometry

First-order geometry describes where tumor systems occupy structural state space.

The canonical structural map currently uses:

-  x-axis = effective-rank delta

-  y-axis = entropy spectral delta

Alternative projections examine the same systems using additional structural coordinate formulations.

### Second-Order Geometry

Second-order geometry evaluates whether first-order structural locations remain stable across:

-  chips,

-  filtering regimes,

-  structural engines,

-  and representational perturbations.

Second-order analyses include:

-  cross-engine concordance,

-  platform reproducibility,

-  filter-regime trajectories,

-  quadrant stability,

-  robustness profiling,

-  boundary sensitivity,

-  and structural archetype persistence.

## Functional Annotation Landscapes

Biological interpretation is treated as a downstream semantic projection layer rather than primary mechanistic inference.

The framework first characterizes transcriptomic structural organization and only then evaluates which biological annotation systems project onto those structural states.

Current biological annotation layers include:

-  GO Biological Process,

-  GO Molecular Function,

-  KEGG,

-  MSigDB/Hallmark,

-  and GO semantic clustering.

The GO semantic layer groups related GO terms into semantic neighborhoods and annotation landscapes.

This allows the framework to ask:

>  Which functional annotation landscapes recur within specific perturbational geometries?

rather than:

>  Which individual pathways explain the tumor system?

Biological enrichment therefore functions as structural-functional annotation rather than standalone mechanistic proof.

## Structural Grammar

The framework is now developing a controlled structural grammar layer.

This grammar transforms warehouse-derived structural states into deterministic semantic summaries.

The grammar architecture follows:

```         
raw metrics → structural descriptors → semantic calls → archetypal states → controlled narrative summaries
```

Examples of semantic calls include:

- structural expansion,

- structural compression,

- constraint relaxation,

- entropic decentralization,

- spectral delocalization,

- boundary-proximal states,

- and stable structural archetypes.

The goal is reproducible structural interpretation:

> same data → same semantic summary.

## Dataset

Current analyses are based primarily on the Ramaswamy global cancer microarray dataset.

Platforms:

-  `hu35ksuba`

-  `hu6800`

Current filtering regimes include:

-  `limma`

-  `variance_global`

-  `variance_comparison`

Filtering regimes are retained independently because they represent distinct perturbations of transcriptomic feature space rather than simple preprocessing variants.

## DuckDB-First Warehouse Architecture

Canonical warehouse:

```         
output/global_cancer/warehouse/global_cancer_results.duckdb
```

The warehouse contains:

- structural inference results,

- latent geometry outputs,

- synthesis tables,

- concordance summaries,

- robustness assignments,

- archetype summaries,

- GO semantic summaries,

- biological enrichment overlays,

- and reporting-oriented visualization views.

The reporting system increasingly treats DuckDB as the canonical semantic and reporting layer.

## Reporting Architecture

The reporting framework uses dynamically generated Quarto reports backed directly by DuckDB warehouse views.

The reporting architecture is organized into modular partials and perturbational geometry layers.

Current reporting components include:

- comparison-level structural phenotype reports,

- first-order perturbational geometry views,

- second-order stability geometry views,

- robustness and trajectory reporting,

- GO semantic annotation landscapes,

- biological gene-set overlays,

- and structural grammar summaries.

## Repository Organization

```
R/
  engines/
  structural_synthesis/
  structural_concordance/
  structural_validation/
  structural_robustness/
  structural_biology/
  structural_grammar/
  warehouse/

scripts/

quarto/
  structural_views/
  reports/
    generated_reports/
    partials/
```


## Guiding Perspective

The framework is not intended to function as a conventional differential-expression reporting system.

Instead, it investigates whether malignancy induces recurrent perturbational organization in transcriptomic geometry itself.

Biological interpretation is therefore contextual rather than primary: it describes functional annotation landscapes projected onto structurally characterized transcriptomic states.

## Website Organization

The rendered Quarto site is organized around four major layers:

| Section | Purpose |
|----|----|
| Homepage | conceptual introduction to perturbational transcriptomic geometry |
| Global Structural Geometry | first-order and second-order structural visualization |
| Structural Comparisons | detailed normal–tumor structural phenotype reports |
| Functional Annotation and Structural Grammar | semantic biological projection and controlled structural interpretation |

The website intentionally emphasizes global perturbational organization and structural robustness before biological interpretation.
