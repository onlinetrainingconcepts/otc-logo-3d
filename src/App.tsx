import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Controllers, VRButton, XR } from '@react-three/xr'
import Logo from '~/components/Logo'

export default function App() {

	return (
		<>
			<VRButton />
			<Canvas>
				<XR>
					<Environment
						background={true}
						files={[
							'left.jpg',
							'right.jpg',
							'top.jpg',
							'bottom.jpg',
							'back.jpg',
							'front.jpg',
						]}
						path="./assets/environments/default/"
					/>
					<Controllers />
					<Logo />
					<ambientLight />
				</XR>
			</Canvas>
		</>
	)
}