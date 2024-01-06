import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalRoute extends Schema.Component {
  collectionName: 'components_global_routes';
  info: {
    displayName: 'Route';
  };
  attributes: {
    name: Attribute.String;
    route: Attribute.Relation<'global.route', 'oneToOne', 'api::route.route'>;
  };
}

export interface NavigatorTargetRoute extends Schema.Component {
  collectionName: 'components_navigator_target_routes';
  info: {
    displayName: 'Target Route';
  };
  attributes: {};
}

export interface NavigatorTarget extends Schema.Component {
  collectionName: 'components_navigator_targets';
  info: {
    displayName: 'Target Collection';
    description: '';
  };
  attributes: {
    collection: Attribute.Relation<
      'navigator.target',
      'oneToOne',
      'api::collection.collection'
    >;
  };
}

export interface PiecePiece extends Schema.Component {
  collectionName: 'components_piece_pieces';
  info: {
    displayName: 'Featured';
    icon: 'paint';
    description: '';
  };
  attributes: {
    item: Attribute.Relation<'piece.piece', 'oneToOne', 'api::piece.piece'>;
    cover: Attribute.Media & Attribute.Required;
    url: Attribute.String;
    coverDesktop: Attribute.Media;
  };
}

export interface PiecePrice extends Schema.Component {
  collectionName: 'components_piece_prices';
  info: {
    displayName: 'Price';
    icon: 'database';
    description: '';
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
      'global.route': GlobalRoute;
      'navigator.target-route': NavigatorTargetRoute;
      'navigator.target': NavigatorTarget;
      'piece.piece': PiecePiece;
      'piece.price': PiecePrice;
    }
  }
}
