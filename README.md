# Global Cancer Structural Reporting Framework

This directory contains the Quarto reporting source for the **Global Cancer Structural Inference Framework**.

The project began as an extension of *Chaos and Complexity in Cancer* and has evolved into a generalized perturbational structural-geometry framework for high-dimensional transcriptomic organization.

## Purpose

The reporting layer generates static Quarto/HTML reports for normal--tumor pairwise comparisons and global structural summaries.

Each pairwise report is intended to function as a **structural phenotype dossier**, integrating:

- complexity metrics
- entropy metrics
- Marchenko--Pastur spectral metrics
- VAE latent-space geometry
- cross-engine concordance
- quadrant assignment
- robustness and boundary stability
- archetype placement
- optional biological gene-set summaries

## Hierarchical Structure of Inference

The reporting framework explicitly separates multiple inferential layers in order to distinguish:

- local perturbational observations,
- representational reproducibility,
- and global organizational structure.

Current reports therefore organize inference hierarchically:

| Level | Description |
|---|---|
| Level 1 | Raw pairwise structural perturbation |
| Level 2 | Integrated synthesis coordinates |
| Level 3 | Concordance across engines, chips, and filter regimes |
| Level 4 | Robustness and archetype persistence |

This separation is important because individual perturbational observations do not necessarily imply stable transcriptomic organizational states. Concordance and robustness layers provide additional evidence regarding persistence and reproducibility of inferred structural phenomena.

## Current Reporting Architecture

The reporting pipeline is now **DuckDB-first**.

The canonical reporting source is:

```text
output/global_cancer/warehouse/global_cancer_results.duckdb
```

The warehouse contains structural, latent, biological, concordance, robustness, archetype, and GO semantic annotation tables/views.

During rendering, Quarto queries the warehouse and writes static HTML output. Users viewing the rendered reports on GitHub Pages do **not** need DuckDB, R, Quarto, or the original warehouse file.

## Pipeline Entry Point

The reporting pipeline is controlled programmatically:

```text
R/pipelines/global_cancer/04_run_report_pipeline.R
```

The companion configuration is:

```text
R/config/global_cancer/report_config.R
```

The current pipeline performs three main tasks:

1. validate the DuckDB warehouse and required tables/views
2. generate one `.qmd` file per normal--tumor comparison
3. optionally render the Quarto project

Older stages that loaded cleaned RDS files, filtered probes, prebuilt summary objects, or HTML fragments have been removed.

## Template Model

Comparison reports are generated from a warehouse-backed template. The template queries DuckDB directly instead of calling pre-rendered HTML fragments.

This is important for PDF compatibility and reproducibility: tables are generated from structured warehouse data rather than embedded HTML snippets.

## GO Semantic Clustering

GO semantic clustering is **not performed in the reporting layer**.

Semantic GO metadata is generated upstream during preprocessing/annotation and stored in the warehouse. Reports may read this metadata, but they do not cluster GO terms at render time.

## Biological Gene-Set Results

GO, KEGG, and MSigDB/Hallmark summaries may be included as downstream interpretive modules.

These biological results should be interpreted as annotations of structurally characterized tumor states, not as the primary basis of structural inference.

## Descriptive Versus Validated Structure

The current reporting framework explicitly separates observed structural perturbations from validated organizational structure.

Reports therefore distinguish:

| Layer | Meaning |
|---|---|
| Descriptive | Observed structural displacement |
| Concordant | Reproducible across representational systems |
| Robust | Stable under platform/filter perturbation |
| Archetypal | Persistent global organizational state |

This distinction is methodologically important because not all observed perturbations necessarily represent stable biological organizational states.

Accordingly, biological pathway interpretation is treated primarily as a downstream interpretive layer built upon structurally validated organizational states rather than as the primary basis of structural inference itself.

## Rendering

From the project root:

```r
source("R/pipelines/global_cancer/04_run_report_pipeline.R")
```

To render the Quarto project manually after reports have been generated:

```r
setwd("quarto")
quarto::quarto_render(".")
```

To debug a single generated comparison report:

```r
quarto::quarto_render(
  input = "reports/generated_reports/comparison_report_blad_tcc.qmd"
)
```

## Rendered Outputs

Rendered reports may be served as static HTML through GitHub Pages or maintained in a separate reports repository.

Because the rendered HTML is static, GitHub users do not need the DuckDB warehouse. The warehouse is required only at report-generation/render time.

Rendered reports (HTML, figures, and associated assets) are maintained in a separate repository:

👉 https://github.com/ali-altimimi-phd/cancer-complexity-reports

This separation keeps the codebase lightweight while allowing full browsing of generated reports.

## Active vs Legacy Files

Some files in this directory may be retained for historical reference or development. The authoritative reporting path is the DuckDB-first pipeline and its warehouse-backed templates.

Legacy artifacts that depend on pre-rendered HTML fragments or direct RDS loading should be considered superseded unless explicitly reactivated.

## Conceptual Orientation

The reporting framework should not be interpreted as a conventional differential-expression reporting system.

Instead, reports are designed to characterize:

- perturbational transcriptomic geometry,
- covariance-spectral organization,
- latent manifold deformation,
- representational concordance,
- and structural robustness.

Accordingly, the reporting language emphasizes organizational structure and perturbational state-space behavior rather than isolated gene-level dysregulation alone.
