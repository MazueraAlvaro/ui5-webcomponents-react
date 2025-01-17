import { ProductSwitchItem } from '../ProductSwitchItem';
import { ProductSwitch } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('ProductSwitch', () => {
  it('Basic Test (generated)', () => {
    cy.mount(
      <ProductSwitch>
        <ProductSwitchItem titleText="Product Switch Item" />
      </ProductSwitch>
    );
    cy.get('[ui5-product-switch]').should('exist');
  });

  cypressPassThroughTestsFactory(ProductSwitch);
});
