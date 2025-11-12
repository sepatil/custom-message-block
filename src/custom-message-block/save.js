import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { message } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<RichText.Content tagName="p" value={message} />
		</div>
	);
}
