import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './singleCharacterLayout.scss';

const SingleCharacterLayout = ({data}) => {

    const {name, description, thumbnail} = data;

    return (
        <div className="single-char">
			<Helmet>
				<meta
					name="description"
					content={`character info: ${name}`}
				/>
				<title>{name}</title>
			</Helmet>
            <img src={thumbnail} alt={name} className="single-char__char-img"/>
            <div className="single-char__info">
                <h2 className="single-char__name">{name}</h2>
                <p className="single-char__descr">{description}</p>
					 <Link to="/" className="single-char__back">Back to all</Link>
            </div>
        </div>
    )
}

export default SingleCharacterLayout;