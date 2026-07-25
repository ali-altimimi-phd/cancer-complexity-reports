(() => {
  const modules = [
    {
      label: "Structural Geometry",
      hub: "dashboards/structural_geometry.html",
      pages: [
        [
          "reports/structural_views/first_order_perturbational_geometry.html",
          "First-Order Geometry"
        ],
        [
          "reports/structural_views/second_order_stability_geometry.html",
          "Second-Order Geometry"
        ]
      ]
    },

    {
      label: "Cross-Cancer Synthesis",
      hub: "dashboards/cross_cancer_synthesis.html",
      pages: [
        [
          "reports/synthesis/cross_cancer_overview.html",
          "Why Compare Cancers?"
        ],
        [
          "reports/synthesis/structural_phenotypes_of_cancer.html",
          "Structural Phenotypes"
        ],
        [
          "reports/synthesis/structural_archetype_atlas.html",
          "Archetype Atlas"
        ],
        [
          "reports/synthesis/quadrant_occupancy_atlas.html",
          "Quadrant Occupancy"
        ],
        [
          "reports/synthesis/descriptor_landscape_atlas.html",
          "Descriptor Landscape"
        ],
        [
          "reports/synthesis/stability_atlas.html",
          "Stability Atlas"
        ],
        [
          "reports/synthesis/cross_cancer_similarity_matrix.html",
          "Similarity Matrix"
        ],
        [
          "reports/synthesis/robustness_atlas.html",
          "Robustness Atlas"
        ],
        [
          "reports/synthesis/biological_convergence_atlas.html",
          "Biological Convergence"
        ],
        [
          "reports/synthesis/synthesis_capstone.html",
          "Cancer Structural Manifold"
        ]
      ]
    },

    {
      label: "Validation Studies",
      hub: "dashboards/validation_studies.html",
      pages: [
        [
          "reports/validation/golub_leukemia_structural_validation.html",
          "Golub Leukemia Validation"
        ],
        [
          "reports/validation/dutch_breast_cancer_clinical_validation_phaseIA.html",
          "NKI Breast Cancer Validation"
        ]
      ]
    }
  ];

  const offset = () =>
    document.querySelector('meta[name="quarto:offset"]')?.content || "";

  const link = (href, text, className) => {
    const element = document.createElement("a");

    element.href = offset() + href;
    element.textContent = text;
    element.className = className;

    return element;
  };

  const buildNavigationBar = (module, pageIndex, position) => {
    const navigation = document.createElement("nav");

    navigation.className =
      `module-report-nav module-report-nav-${position}`;

    navigation.setAttribute(
      "aria-label",
      `${module.label} report navigation`
    );

    const context = document.createElement("div");
    context.className = "module-report-context";

    context.append(
      link(
        "index.html",
        "Main dashboard",
        "module-nav-home"
      )
    );

    context.append(
      link(
        module.hub,
        module.label,
        "module-nav-hub"
      )
    );

    const current = document.createElement("span");
    current.className = "module-nav-current";
    current.textContent = module.pages[pageIndex][1];

    context.append(current);

    const sequence = document.createElement("div");
    sequence.className = "module-report-sequence";

    if (pageIndex > 0) {
      const previous = module.pages[pageIndex - 1];

      sequence.append(
        link(
          previous[0],
          `← ${previous[1]}`,
          "module-nav-prev"
        )
      );
    }

    if (pageIndex < module.pages.length - 1) {
      const next = module.pages[pageIndex + 1];

      sequence.append(
        link(
          next[0],
          `${next[1]} →`,
          "module-nav-next"
        )
      );
    } else {
      sequence.append(
        link(
          module.hub,
          `Return to ${module.label}`,
          "module-nav-next"
        )
      );
    }

    navigation.append(context, sequence);

    return navigation;
  };

  document.addEventListener("DOMContentLoaded", () => {
    const currentPath = decodeURIComponent(window.location.pathname)
      .replace(/\\/g, "/")
      .replace(/^\/+/, "");

    let matchedModule = null;
    let matchedPageIndex = -1;

    for (const module of modules) {
      const pageIndex = module.pages.findIndex(([path]) =>
        currentPath.endsWith(path)
      );

      if (pageIndex >= 0) {
        matchedModule = module;
        matchedPageIndex = pageIndex;
        break;
      }
    }

    if (!matchedModule) {
      return;
    }

    document.body.classList.add("module-report-page");

    const main = document.querySelector(
      "main#quarto-document-content"
    );

    if (!main) {
      return;
    }

    const titleBlock = main.querySelector("#title-block-header");

    const topNavigation = buildNavigationBar(
      matchedModule,
      matchedPageIndex,
      "top"
    );

    if (titleBlock) {
      main.insertBefore(topNavigation, titleBlock);
    } else {
      main.prepend(topNavigation);
    }

    const bottomNavigation = buildNavigationBar(
      matchedModule,
      matchedPageIndex,
      "bottom"
    );

    main.append(bottomNavigation);
  });
})();