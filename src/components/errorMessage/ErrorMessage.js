
	import img from './error.gif';
	import { Helmet } from 'react-helmet';

	const ErrorMessage = () => {
		return ( 
			<>
				<Helmet>
					<meta
						name="description"
						content='Error'
					/>
					<title>Error</title>
				</Helmet>
				<img style={{display: 'block', width: '250px', height: '250px', objectFit: 'contain', margin: '0 auto'}} src = {img} alt='pic' />
			</>
		)
	}

	export default ErrorMessage;

	/* <img src={process.env.PUBLIC_URL + '/error.gif'}/> */ // лучше все таки делать это через компонент