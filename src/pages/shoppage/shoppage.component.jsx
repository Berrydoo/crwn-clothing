import React from "react";

import SHOP_DATA from "./collectiondata";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";

export default class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
        };
    }

    render() {
        const { collections } = this.state;
        return collections.map(({ id, ...otherCollectionProps }) => {
            return (
                <div key={id} className="shop-page">
                    <CollectionPreview {...otherCollectionProps} />
                </div>
            );
        });
    }
}
