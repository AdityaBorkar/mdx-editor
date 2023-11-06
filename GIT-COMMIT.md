changes as recommended #39#issuecomment-1680843870

- Material icons (sharp mode, 24px, weight 400, fill off)

Oh, that's lovely! I've seen that you encountered the combinatory mess related to nested formatting, and the necessity to process the formatting twice. Not pleasant, unfortunately.

I would rather have the BoldItalicsUnderlineToggles kept as is, and introduce an additional toolbar component that includes the strikethrough, superscript, subscript parts. My thinking here is that B/I/U are essential and often used, while the others are much more rarely utilized. This would also make this PR not a breaking change. You can also make the InlineTextFormattingToggles accept a parameter that controls which buttons to display.

create an additional item in examples

It's good to have an example with nested formatting (the reason for the complex export part).
