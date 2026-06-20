# Global Cancer Structural Inference Framework

A perturbational structural-geometry framework for high-dimensional transcriptomic organization.

This repository contains the analytical, warehouse, and reporting infrastructure for the Global Cancer Structural Inference Framework.

---

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

---

## Current Status

Completed

- Ramaswamy Discovery Platform
- Golub Leukemia Validation
- NKI Breast Cancer Phase IA

In Progress

- NKI Phase IB Prognostic Geometry
- Latent-Space Structural Validation
- Structural Grammar Refinement

---

## Structural Engines

| Engine | Structural Interpretation |
|----------|----------|
| Complexity | Distribution and concentration of transcriptomic organization |
| Entropy | Informational organization of covariance structure |
| MP Spectral | Departures from random covariance geometry |
| Latent Geometry | Nonlinear manifold displacement |

These engines are treated as complementary projections of transcriptomic organization rather than interchangeable metrics.

---

## Computational Architecture

```text
preprocessing
→ structural inference
→ structural synthesis
→ structural concordance
→ structural validation
→ structural robustness
→ perturbational geometry
→ clinical geometry
→ functional annotation projection
→ structural grammar
```

These stages progressively transform raw transcriptomic measurements into increasingly integrated representations of perturbational structural organization, robustness, validation, semantic projection, and controlled interpretation.

---

## Structural Geometry Framework

### First-Order Geometry

First-order geometry describes where tumor systems occupy structural state space.

The canonical structural map currently uses:

- x-axis = effective-rank delta
- y-axis = entropy spectral delta

Alternative projections examine the same systems using additional structural coordinate formulations.

### Second-Order Geometry

Second-order geometry evaluates whether first-order structural locations remain stable across:

- chips,
- filtering regimes,
- structural engines,
- and representational perturbations.

Second-order analyses include:

- cross-engine concordance,
- platform reproducibility,
- filter-regime trajectories,
- quadrant stability,
- robustness profiling,
- boundary sensitivity,
- and structural archetype persistence.

---

## Functional Annotation Landscapes

Biological interpretation is treated as a downstream semantic projection layer rather than primary mechanistic inference.

The framework first characterizes transcriptomic structural organization and only then evaluates which biological annotation systems project onto those structural states.

Current biological annotation layers include:

- GO Biological Process,
- GO Molecular Function,
- KEGG,
- MSigDB/Hallmark,
- and GO semantic clustering.

The GO semantic layer groups related GO terms into semantic neighborhoods and annotation landscapes.

This allows the framework to ask:

> Which functional annotation landscapes recur within specific perturbational geometries?

rather than:

> Which individual pathways explain the tumor system?

Biological enrichment therefore functions as structural-functional annotation rather than standalone mechanistic proof.

---

## Structural Grammar

The framework is developing a controlled structural grammar layer.

```text
raw metrics
→ structural descriptors
→ semantic calls
→ archetypal states
→ controlled narrative summaries
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

> same data → same semantic summary

---

## Dataset Platforms

### Ramaswamy Global Cancer Dataset

The Ramaswamy study serves as the primary discovery platform.

Major objectives include:

- global perturbational geometry,
- structural phenotype discovery,
- cross-cancer comparison,
- robustness profiling,
- semantic biological projection,
- and structural grammar development.

Platforms:

- `hu35ksuba`
- `hu6800`

Filtering regimes:

- `limma`
- `variance_global`
- `variance_comparison`

---

## Validation Framework

A central objective of the Structural Inference Framework is determining whether observed structural organization reflects reproducible biological signal rather than dataset-specific artifacts.

Validation proceeds through progressively more demanding stages:

1. Cross-platform validation
2. Cross-feature-space validation
3. Cross-dataset validation
4. Clinical validation
5. Prognostic validation
6. Latent-space validation

Validation is therefore treated as a primary scientific objective rather than a downstream quality-control procedure.

---

## Current Validation Studies

### Golub Leukemia Validation

The Golub AML–ALL dataset represents the first external validation study.

Key questions:

- Can structural geometry distinguish biologically distinct malignant lineages?
- Do structural conclusions remain stable under major feature-space perturbation?

Major findings:

- AML and ALL occupy distinct structural transcriptomic states.
- Structural discrimination persists despite limited overlap between feature-selection regimes.
- Descriptor interpretations remain directionally stable across perturbational feature spaces.

Golub therefore establishes biological-discrimination validity and feature-space robustness.

### Dutch Breast Cancer Validation (NKI)

The Dutch breast cancer study represents the first clinical validation platform.

Phase IA evaluates whether structural transcriptomic organization is associated with clinical outcome.

Key questions:

- Can structural geometry distinguish favorable and unfavorable clinical states?
- Are structural descriptors clinically meaningful?

Phase IB extends this work toward prognostic structural geometry, survival-associated transcriptomic organization, and risk-associated structural phenotypes.

The NKI program therefore evaluates clinical relevance and prognostic significance of structural transcriptomic organization.

---

## DuckDB-First Warehouse Architecture

Canonical warehouse:

```text
output/global_cancer/warehouse/global_cancer_results.duckdb
```

The warehouse contains:

- structural inference results,
- latent geometry outputs,
- synthesis tables,
- concordance summaries,
- robustness assignments,
- archetype summaries,
- biological enrichment overlays,
- validation outputs,
- and reporting-oriented visualization views.

---

## Reporting Architecture

The reporting framework uses dynamically generated Quarto reports backed directly by DuckDB warehouse views.

Current reporting components include:

- comparison-level structural phenotype reports,
- first-order perturbational geometry views,
- second-order stability geometry views,
- validation studies,
- robustness and trajectory reporting,
- GO semantic annotation landscapes,
- biological gene-set overlays,
- and structural grammar summaries.

---

## Repository Organization

```text
R/
  engines/
  structural_synthesis/
  structural_concordance/
  structural_robustness/
  structural_biology/
  structural_grammar/
  warehouse/

  golub/
  nki/

scripts/

quarto/
  structural_views/
  validation/
  reports/
    generated_reports/
    partials/
```

---

## Guiding Perspective

The framework is not intended to function as a conventional differential-expression reporting system.

Instead, it investigates whether malignancy induces recurrent perturbational organization in transcriptomic geometry itself.

Biological interpretation is therefore contextual rather than primary; it describes functional annotation landscapes projected onto structurally characterized transcriptomic states.

The long-term objective is not merely characterization of cancer datasets, but development of a general framework for structural inference in high-dimensional biological systems.

Cancer serves as the initial experimental domain because of its rich transcriptomic heterogeneity, extensive public datasets, and clinically annotated cohorts.

---

## Website Organization

The rendered Quarto site is organized around six major layers:

| Section | Purpose |
|----------|----------|
| Homepage | Conceptual introduction to structural inference |
| Global Structural Geometry | First-order and second-order perturbational geometry |
| Structural Comparisons | Cross-cancer structural phenotype reports |
| Validation Studies | Golub and NKI validation programs |
| Functional Annotation Landscapes | Biological projection onto structural states |
| Structural Grammar | Controlled semantic interpretation of structural phenotypes |

The website intentionally progresses from discovery, to validation, to biological interpretation, and finally to controlled semantic synthesis.
