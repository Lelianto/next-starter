import type { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'

interface TechStackProps {
	logo?: string | StaticImageData,
	name?: string,
	width?: number,
	height?: number,
}

const TechStack: NextPage<TechStackProps> = ({ logo, name, width = 44, height = 27 }) => {
	return (
		<>
		{
			logo &&
			<div className="flex flex-row justify-center h-10 leading-10 bg-black text-white rounded-full font-poppins cursor-pointer">
				<div className={`flex py-[5px]`}>
					<Image
						src={logo}
						width={width}
						height={height}
						alt={'alt'}
					/>
				</div>
				<div className="pl-1 text-sm flex h-10 leading-10">
					{name}
				</div>
			</div>
		}
		</>
	)
}

export default TechStack