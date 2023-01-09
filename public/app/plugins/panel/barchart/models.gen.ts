// Code generated - EDITING IS FUTILE. DO NOT EDIT.
//
// Generated by:
//     public/app/plugins/gen.go
// Using jennies:
//     TSTypesJenny
//     PluginTSTypesJenny
//
// Run 'make gen-cue' from repository root to regenerate.

import * as ui from '@grafana/schema';

export const PanelModelVersion = Object.freeze([0, 0]);

export interface PanelOptions extends ui.OptionsWithLegend, ui.OptionsWithTooltip, ui.OptionsWithTextFormatting {
  /**
   * TODO docs
   */
  barRadius?: number;
  /**
   * Controls the width of bars. 1 = Max width, 0 = Min width.
   */
  barWidth: number;
  /**
   * TODO docs
   */
  colorByField?: string;
  /**
   * Controls the width of groups. 1 = max with, 0 = min width.
   */
  groupWidth: number;
  /**
   * TODO docs
   */
  orientation: ui.VizOrientation;
  /**
   * This controls whether values are shown on top or to the left of bars.
   */
  showValue: ui.VisibilityMode;
  /**
   * TODO docs
   */
  stacking: ui.StackingMode;
  /**
   * TODO docs
   */
  xField?: string;
  /**
   * TODO docs
   */
  xTickLabelMaxLength: number;
  /**
   * TODO docs
   */
  xTickLabelRotation: number;
  /**
   * TODO docs
   * negative values indicate backwards skipping behavior
   */
  xTickLabelSpacing?: number;
}

export const defaultPanelOptions: Partial<PanelOptions> = {
  barRadius: 0,
  barWidth: 0.97,
  groupWidth: 0.7,
  orientation: ui.VizOrientation.Auto,
  showValue: ui.VisibilityMode.Auto,
  stacking: ui.StackingMode.None,
  xTickLabelRotation: 0,
  xTickLabelSpacing: 0,
};

export interface PanelFieldConfig extends ui.AxisConfig, ui.HideableFieldConfig {
  /**
   * Controls the fill opacity of the bars.
   */
  fillOpacity?: number;
  /**
   * Set the mode of the gradient fill. Fill gradient is based on the line color. To change the color, use the standard color scheme field option.
   * Gradient appearance is influenced by the Fill opacity setting.
   */
  gradientMode?: ui.GraphGradientMode;
  /**
   * Controls line width of the bars.
   */
  lineWidth?: number;
  /**
   * Threshold rendering
   */
  thresholdsStyle?: ui.GraphThresholdsStyleConfig;
}

export const defaultPanelFieldConfig: Partial<PanelFieldConfig> = {
  fillOpacity: 80,
  gradientMode: ui.GraphGradientMode.None,
  lineWidth: 1,
};
