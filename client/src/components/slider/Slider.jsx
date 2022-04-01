import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import './slider.scss';
import { sliderItems } from '../../data';

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(1);
	const handleClick = direction => {
		if (direction === 'left') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};
	return (
		<div className='slider'>
			<div className='arrow left' onClick={() => handleClick('left')}>
				<ArrowLeftOutlined />
			</div>
			<div
				className='wrapper'
				slideIndex={slideIndex}
				style={{ transform: `translateX(${slideIndex * -100}vw)` }}
			>
				{sliderItems.map(item => (
					<div
						className='slide'
						key={item.id}
						style={{ backgroundColor: `#${item.bg}` }}
					>
						<div className='imageContainer'>
							<img src={item.img} alt='pic' />
						</div>
						<div className='infoContainer'>
							<h1 className='title'>{item.title}</h1>
							<p className='desc'>{item.desc}</p>
							<button className='button'>查看更多</button>
						</div>
					</div>
				))}
			</div>
			<div className='arrow right' onClick={() => handleClick('right')}>
				<ArrowRightOutlined />
			</div>
		</div>
	);
};

export default Slider;
