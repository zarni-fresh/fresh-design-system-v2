import { Badge } from '../Badge/Badge';
import { TextField } from './TextField';
import { Stack } from '@fresh/ui-core';

export const TextFieldExamples = () => {
  return (
    <Stack gap={4}>
      <TextField
        description="Use your work email so teammates can find your drafts."
        helperText="We will never use this for marketing."
        label="Email"
        leadingIcon="search"
        placeholder="name@company.com"
        required
      />

      <TextField
        errorMessage="Choose a stronger password with at least 12 characters."
        label="Password"
        placeholder="Enter a password"
        rightAdornment={<Badge emphasis="outline" label="Required" size="sm" />}
        secureTextEntry
      />

      <TextField
        editable={false}
        helperText="Managed by your workspace administrator."
        label="Workspace slug"
        value="fresh-design"
      />

      <TextField
        description="This preview helps validate desktop web spacing and accessory layout."
        helperText="Compact fields are useful inside dense review flows."
        label="Project key"
        placeholder="fresh-core"
        size="sm"
      />
    </Stack>
  );
};
