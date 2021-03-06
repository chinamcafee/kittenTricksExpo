import React from 'react';
import { AutocompleteElement, AutocompleteProps } from '@ui-kitten/components';
import { AutocompleteShowcase } from './autocomplete-showcase.component';
import { autocompleteSettings, autocompleteShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';


export const AutocompleteScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: AutocompleteProps): AutocompleteElement => (
    <AutocompleteShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={autocompleteShowcase}
      settings={autocompleteSettings}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};
