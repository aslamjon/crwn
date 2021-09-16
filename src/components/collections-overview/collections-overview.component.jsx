import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

import { CollectionsOverviewContainer } from './collections.overview.style';

const CollectionsOverview = ({ collections, ...otherProps }) => (
    <CollectionsOverviewContainer>
        {
            // console.log(collections[0].id)
        }
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherProps} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})
export default connect(mapStateToProps)(CollectionsOverview);