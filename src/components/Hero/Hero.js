import React from 'react';

import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				T'es sur un
				<br />
				un tuto de projet de portfolio pas fou
			</SectionTitle>
			<SectionText>
				Faut pas faire attention, je tente des choses <br />
				C'est un peu du c/c sans explication malheureusement
			</SectionText>
			<Button onClick={() => (window.location = 'https://google.com')}>
				Learn More
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
