import { $createHorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode'
import * as Mdast from 'mdast'
import { MdastImportVisitor } from '../../importMarkdownToLexical'

export const MdastThematicBreakVisitor: MdastImportVisitor<Mdast.ThematicBreak> = {
  testNode: 'thematicBreak',
  visitNode({ actions }) {
    actions.addAndStepInto($createHorizontalRuleNode())
  }
}
