import { createSystem, defaultConfig } from "@chakra-ui/react";
import colors from './colours';

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: {value: "'Inter', 'sans-serif'"},
        body: {value: "'Inter', 'sans-serif'"},
      },
    }
  }
}
);

export default system;
