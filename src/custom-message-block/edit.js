import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { message } = attributes;

	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<RichText
				tagName="p"
				value={message}
				onChange={(value) => setAttributes({ message: value })}
				placeholder={__("Type your message here...", "custom-message-block")}
			/>
		</div>
	);
}
