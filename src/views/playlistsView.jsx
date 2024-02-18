import ListScroller from '../components/ListScroller';

export default function playerView(props) {
	return (
		<section className='playlists'>
			<ListScroller
				title='Long playlists'
				data={props.playlists[0]}
				play={props.play}
				executing={props.executing}
			/>
			<ListScroller
				title='Short playlists'
				data={props.playlists[1]}
				play={props.play}
				executing={props.executing}
			/>
		</section>
	);
}
