import { Pane as Tweakpane } from "tweakpane";
import { useAtom } from "jotai";
import { useAtomValue } from "jotai/utils";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import { configAtom } from "@/components/algolia/config";
import { debugLayerEnabledAtom } from "@/components/@dev/debug-layer/debug-layer";
import { gridsHiddenAtom } from "@/components/@dev/grids/grids";

export function Pane() {
  const paneContainer = useRef(null);
  const router = useRouter();

  const [gridsHidden, setGridsHidden] = useAtom(gridsHiddenAtom);
  const { refinementsLayoutAtom } = useAtomValue(configAtom);

  const [refinementsLayout, setRefinementsLayout] = useAtom(
    refinementsLayoutAtom
  );
  const [debugLayerEnabled, setDebugLayerEnabled] = useAtom(
    debugLayerEnabledAtom
  );

  useEffect(() => {
    const pane: any = new Tweakpane({
      title: "Dev",
      expanded: false,
      container: paneContainer.current!,
    });

    // Routes
    const routesFolder = pane.addFolder({ title: "Routes" });
    routesFolder
      .addInput(router, "route", {
        label: "Current route",
        options: {
          index: "/",
          catalog: "/catalog",
          "kit/buttons": "/kit/buttons",
          "kit/chips": "/kit/chips",
          "kit/banners": "/kit/banners",
        },
      })
      .on("change", (ev: any) => {
        router.push(ev.value);
      });

    // Refinements
    const refinementsFolder = pane.addFolder({ title: "Refinements" });
    refinementsFolder
      .addInput({ refinementsLayout }, "refinementsLayout", {
        label: "Layout",
        options: {
          bar: "bar",
          panel: "panel",
        },
      })
      .on("change", (ev: any) => {
        setRefinementsLayout(ev.value);
      });

    // Grids
    const gridFolder = pane.addFolder({ title: "Grid" });
    gridFolder
      .addInput({ gridsHidden }, "gridsHidden", { label: "Hidden" })
      .on("change", (ev: any) => {
        setGridsHidden(ev.value);
      });

    // Debug layer
    const debugLayerFolder = pane.addFolder({ title: "Debug Layer" });
    debugLayerFolder
      .addInput({ debugLayerEnabled }, "debugLayerEnabled", {
        label: "Enabled",
      })
      .on("change", (ev: any) => {
        setDebugLayerEnabled(ev.value);
      });

    return () => {
      pane.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paneContainer]);

  return <div className="fixed bottom-3 left-3" ref={paneContainer} />;
}
