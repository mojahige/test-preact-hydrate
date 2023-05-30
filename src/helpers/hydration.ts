import { hydrate } from "preact";
import { html } from "htm/preact";

type ValidateResult =
  | {
      valid: true;
      path: string;
      name?: string;
    }
  | {
      valid: false;
    };

function validate(target: HTMLElement): ValidateResult {
  const { componentPath, componentName } = target.dataset;

  if (componentPath === undefined || componentPath.length > 0) {
    return {
      valid: false,
    };
  }

  return {
    valid: true,
    path: componentPath,
    name: componentName,
  };
}

export async function hydration(target: HTMLElement) {
  const result = validate(target);

  if (!result.valid) {
    throw new Error("Invalid hydration target.");
  }

  const { path, name } = result;

  try {
    const module = await import(path);

    hydrate(html`<${module[name ?? "default"]} />`, target);
  } catch (error) {
    throw new Error("Hydration failed.", { cause: error });
  }
}
