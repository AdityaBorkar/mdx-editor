import React from 'react'
import { corePluginHooks } from '../../core'
import { IS_HIGHLIGHT, IS_STRIKETHROUGH, IS_SUBSCRIPT, IS_SUPERSCRIPT } from '../../../FormatConstants'
import { MultipleChoiceToggleGroup } from '../primitives/toolbar'
import StrikethroughIcon from '../../../icons/format_strikethrough.svg'
import SuperscriptIcon from '../../../icons/format_superscript.svg'
import SubscriptIcon from '../../../icons/format_subscript.svg'
import HighlightIcon from '../../../icons/format_highlight.svg'

type InlineFormattingTogglesProps = {
  options: ('strikethrough' | 'superscript' | 'subscript' | 'highlight')[]
}

// TODO - Rewrite documentation

/**
 * A toolbar component that lets the user toggle inline text formatting options - strikethrough, subscript, superscript and highlight.
 * Accepts props as an object with the following properties:
 * - options: An array of strings, each of which is one of 'strikethrough', 'superscript', 'subscript' or 'highlight'.
 * Renders the resulting component as a group of toggle buttons in the order of the options array.
 * @example
 * <InlineFormattingToggles options={['strikethrough', 'superscript', 'subscript', 'highlight']} />
 * @example
 * <InlineFormattingToggles options={['strikethrough', 'highlight']} />
 */
export const InlineFormattingToggles: React.FC<InlineFormattingTogglesProps> = (props) => {
  const [currentFormat] = corePluginHooks.useEmitterValues('currentFormat')
  const applyFormat = corePluginHooks.usePublisher('applyFormat')

  const FormattingItems = props.options.map((option) => {
    switch (option) {
      case 'strikethrough':
        const strikethroughIsOn = (currentFormat & IS_STRIKETHROUGH) !== 0
        const strikethroughTitle = strikethroughIsOn ? 'Remove strikethrough' : 'Strikethrough'
        return {
          title: strikethroughTitle,
          active: strikethroughIsOn,
          contents: <StrikethroughIcon />,
          onChange: applyFormat.bind(null, option)
        }
      case 'superscript':
        const superscriptIsOn = (currentFormat & IS_SUPERSCRIPT) !== 0
        const superscriptTitle = superscriptIsOn ? 'Remove superscript' : 'Superscript'
        return {
          title: superscriptTitle,
          active: superscriptIsOn,
          contents: <SubscriptIcon />,
          onChange: applyFormat.bind(null, option)
        }
      case 'subscript':
        const subscriptIsOn = (currentFormat & IS_SUBSCRIPT) !== 0
        const subscriptTitle = subscriptIsOn ? 'Remove subscript' : 'Subscript'
        return {
          title: subscriptTitle,
          active: subscriptIsOn,
          contents: <SuperscriptIcon />,
          onChange: applyFormat.bind(null, option)
        }
      case 'highlight':
        const highlightIsOn = (currentFormat & IS_HIGHLIGHT) !== 0
        const highlightTitle = highlightIsOn ? 'Remove highlight' : 'Highlight'
        return {
          title: highlightTitle,
          active: highlightIsOn,
          contents: <HighlightIcon />,
          onChange: applyFormat.bind(null, option)
        }
      default:
        throw new Error(
          `InlineFormattingToggles: Invalid option '${option}' passed. Valid options are 'strikethrough', 'superscript', 'subscript' and 'highlight'.`
        )
    }
  })

  return <MultipleChoiceToggleGroup items={FormattingItems} />
}
