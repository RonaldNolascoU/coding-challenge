import React from 'react';

type Props = { imgSrc: string };

const CoverImageView = (props: Props) => {
    return (
        <div style={styles.relativePositioner}>
            <img
                src={props.imgSrc}
                // @ts-ignore
                style={styles.image}
            />
        </div>
    );
};

const styles = {
    image: {
        height: 216,
        width: '100%',
        top: 0,
        right: 0,
        left: 0,
        objectFit: 'cover',
    },
    relativePositioner: {
        height: 136,
        width: '100%',
    },
};

export const coverImageNegativeMargin =
    styles.image.height - styles.relativePositioner.height;

export default CoverImageView;
