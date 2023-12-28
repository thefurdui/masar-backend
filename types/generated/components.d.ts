import type { Schema, Attribute } from '@strapi/strapi';

export interface AccessoryAccessory extends Schema.Component {
  collectionName: 'components_accessory_accessories';
  info: {
    displayName: 'Featured';
    icon: 'paint';
    description: '';
  };
  attributes: {
    item: Attribute.Relation<
      'accessory.accessory',
      'oneToOne',
      'api::accessory.accessory'
    >;
    cover: Attribute.Media & Attribute.Required;
    url: Attribute.String;
    coverDesktop: Attribute.Media;
  };
}

export interface AccessoryPrice extends Schema.Component {
  collectionName: 'components_accessory_prices';
  info: {
    displayName: 'Price';
    icon: 'database';
  };
  attributes: {
    eur: Attribute.Integer & Attribute.Required;
    usd: Attribute.Integer & Attribute.Required;
    uzs: Attribute.Integer & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'accessory.accessory': AccessoryAccessory;
      'accessory.price': AccessoryPrice;
    }
  }
}
