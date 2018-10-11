import React, { Component } from 'react'
import library from './library.json'
import SoundButton from './SoundButton'

class SoundBoard extends Component {
	render() {
		const lib = library[this.props.match.params.name]
		return (
			<>
				<h4 className="sound-title">
					You are listening to the sweet sounds of {lib.title}
				</h4>
				<div className="sound-board">
					{lib.sounds.map(s => (
						<SoundButton key={s.sound} thumb={s.thumb} sound={s.sound} />
					))}
				</div>
			</>
		)
	}
}

export default SoundBoard
