import type { NextPage } from 'next'
import { StaticImageData } from 'next/image'
import TechStack from '../atoms/tech-stack'

interface StackProps {
	name?: string,
	logo?: StaticImageData,
	width?: number,
	height?: number,
}
interface TechStackProps {
	title?: string,
	stacks?: StackProps[]
}

const OurTechStack: NextPage<TechStackProps> = ({ title, stacks }) => {
	return (
		<>
			<div>
				<div className="font-poppins text-lg mb-3">
					{title}
				</div>
				<div className="grid grid-cols-2 gap-2">
					{
						stacks?.map((stack, index) => {
							const { name, logo, width, height} = stack
							return <div key={`stack-${name}-${index}`}>{ logo && <TechStack logo={logo} name={name} width={width} height={height}/>}</div>
						})
					}
				</div>
			</div>
		</>
	)
}

export default OurTechStack;