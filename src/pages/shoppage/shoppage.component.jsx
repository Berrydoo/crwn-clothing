import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCollectionItems } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/preview-collection/collection-preview.component";

const Shop = ({ collections }) => (
    <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => (
            <CollectionPreview key={id} {...otherProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionItems,
});

export default connect(mapStateToProps)(Shop);
