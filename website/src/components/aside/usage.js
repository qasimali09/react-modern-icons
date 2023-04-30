import React from 'react';
import { Heading, Stack } from '@chakra-ui/react';
import CodeBlock from './codeBlock';

const Usage = () => {
  return (
    <Stack spacing={2}>
      <Heading as="h3" size="md" fontWeight="semibold" mb={2}>
        Usage
      </Heading>
      <CodeBlock
        language="js"
        code={`
import React from 'react';
import { Icon } from 'react-modern-icons';

const App = () => {
  return (
    <Icon variant="filled" size={30} />
  );
};

export default App;
        `}
      />
    </Stack>
  );
};

export default Usage;
