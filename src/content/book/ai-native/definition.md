---
title: "What is an AI-native company?"
book: "The AI-Native Company"
topic: "Definition"
slug: "ai-native/definition"
lang: "en"
description: "What is an AI-native company? A map of how the phrase is used, what each source emphasizes, a working definition, and seven questions that show how far along a company is."
author: "Lorenzo de Leo"
datePublished: "2026-11-13"
dateModified: "2026-11-16"
version: "v0.3"
keyPoints:
  - "The phrase is doing several jobs at once, so this chapter opens with a map instead of a verdict."
  - "Using AI from the first day names a start date, not a design."
  - "Each source lights up a different side of AI-native, and this chapter builds on all of them."
  - "Cloud-native settled a similar argument by writing the definition down, and this wave reaches more of the company than the last time building got cheaper."
  - "You cannot tell how AI-native a company is from its website, but seven questions about how it is built can."
changelog:
  - version: "v0.3"
    date: "2026-11-16"
    note: "Rewrote the prose for readability; no change to the definition, the map or the test."
  - version: "v0.2"
    date: "2026-11-14"
    note: "Reframed the source map as research, moved the spine to the book page, and described ENYA as one person working with agents."
  - version: "v0.1"
    date: "2026-11-13"
    note: "Draft. First version of the Definition topic: map of definitions, examples, working definition (replaces the July 2026 wording) and the AI-native test."
---

# What is an AI-native company?

The phrase is everywhere this year. It shows up in pitch decks, in memos from public-company CEOs, in a request for startups, and in a telecom standard that has been using a cousin of the term for years. In 2026, "AI startup" is what "internet company" was in 2005: a label that is true of almost everyone, and thinner every month. "AI-native" was supposed to be the sharper version. It has come to mean several useful things at once.

I don't read that as a mess. A venture firm, a research team, a consultancy, a network engineer and a founder are each answering a different question, and they happen to reach for the same word to do it. None of them is wrong. They are looking at different parts of the same thing, which is why this chapter starts with a map of those meanings rather than a ruling on which one is correct.

The chapter moves in three steps. First comes the research: what nine sources mean by "AI-native" and what I take from each one. Then comes the definition I actually use, along with how it changed between July and November 2026. Last comes a practical test, seven questions you can ask a company to see how far along it is.

Like the rest of the book, this chapter is written in public, and I expect parts of it to change. When they do, the changelog at the bottom of the page records what changed and when.

## Why "AI-native" means several things at once

A venture firm uses the phrase to name a market category. A research team uses it to describe a growth pattern. A consultancy uses it for an enterprise operating model. A telecom standard uses it for a network. A founder uses it to say "we used AI from day one." They are not disagreeing so much as they are pointing at different parts of the same object.

Each of these sources was written for a purpose. A founder's guide helps founders, a spending report tracks where money goes, and a telecom white paper describes networks. So I read each one for the job it was meant to do, and I ask one question of it: which side of AI-native does it make clearer? In the map below, I quote each source in its own words and then say what I take from it. The rest of the chapter builds on those pieces until they add up to a definition and a test.

## The map

Here's what nine sources emphasize, in their own words, and what I take from each.

### The product test (CRV)

CRV's founder guide asks one question: *"if you remove the AI, does the product cease to function?"* It adds a second question I have started asking myself: *"when the models get better, are you happy or sad?"* ([CRV, March 2026](https://www.crv.com/content/what-is-ai-native))

What CRV emphasizes is the product: whether the AI is the thing itself or a feature attached to it, and whether better models make the product stronger. I take both questions. A founder's guide is meant to help people judge what a company sells, and these two questions do that well. There is another side to the same subject, though: how the company itself is built, meaning who does the work, where its knowledge lives and who decides. That side is what the test at the end of this chapter is for. Questions about roles, such as which work people do and which agents do, follow from how the company is built, and I return to them in the chapters on judgment and organization.

### The system definition (IBM)

IBM defines AI-native as something *"designed from the ground up with AI as a core component, not bolted on later as a mere feature."* It notes that legacy enterprises can qualify if they *"comprehensively re-orient their business model around data and AI models,"* and it predicts that *"the term's usefulness [will] fade over time as AI's ubiquity advances."* ([IBM, February 2026](https://www.ibm.com/think/topics/ai-native))

What IBM emphasizes is the system. AI is part of the design from the start rather than a layer added at the end, and there is a path for companies that were not born this way. I take both points, and of all the sources here, IBM's definition is the closest to the one I use. I also take its prediction. As AI becomes ordinary, the word "AI-native" will probably stop meaning much, the way "internet company" did. The question it points at, how a company is designed around people and agents, will still be there after the label fades.

### The market category (Y Combinator)

Y Combinator opened its Summer 2026 Requests for Startups with *"AI has stopped being a feature and started being the foundation."* One request asks for *"AI-native companies that don't sell software—they sell the service. Instead of giving you a tool, they just do the work."* Another, "The AI Operating System for Companies," starts from this observation: *"The best AI-native companies we're seeing have figured out something most haven't: they've made their entire company queryable."* It describes the result as turning *"a company from an open loop into a closed loop."* ([Y Combinator, Requests for Startups, Summer 2026](https://www.ycombinator.com/rfs))

What Y Combinator emphasizes is where founders might build next, which is exactly what a request for startups is for. I take two ideas from it. The first is a company that sells the work itself rather than a tool for doing it. The second is the "queryable" company: a firm whose knowledge, decisions and history can be read and written as one system, so that what it learns flows straight back into what it does. That is what YC means by turning an open loop into a closed one, and it is an idea I build on throughout this book.

[[more:Technology|The tool downloads. The context doesn't.]]

### The buying pattern (a16z)

a16z's spending report observes that *"while big companies are getting incremental benefits to existing team structures, at startups we're seeing truly AI-native companies emerge."* It splits vertical AI into products that supercharge human employees and ones that act as *"AI employees."* ([a16z, October 2025](https://a16z.com/the-ai-application-spending-report-where-startup-dollars-really-go/))

What it emphasizes is the market: what companies are actually paying for, and where that spend shows up. I take the split. Tools that make a person faster, and tools that do a job a person used to do, are different purchases, and a spending report is exactly the place to see that. I come back to the split later, because a company that runs mostly on the second kind of tool has to be organized differently from one that runs on the first.

### The business model (Emergence Capital)

Emergence names a category, AI-native services: companies that sell the outcome rather than the tool. It also names a trap, *"Mirage PMF: The illusion of product-market fit created by revenue growth that's powered by human labor rather than AI leverage."* ([Emergence, March 2026](https://www.emcap.com/thoughts/the-ai-native-services-playbook))

What it emphasizes is one business model, services, and a failure mode inside it. I take Mirage PMF, and I use it beyond services. When a company's revenue is growing fast but the work behind it is still mostly people doing things by hand, that tells you something about how the company is built, whatever it sells.

[[more:Building|Product-market fit in an AI-native company]]

### The growth profile (Bessemer)

Bessemer's State of AI benchmarks two kinds of AI startups, "Supernovas" and "Shooting Stars," by growth and margin. On how the best teams work, it asks a question I want to leave standing, because it is a great one: *"Today, the question isn't if your team uses AI, but how well you orchestrate it into a compounding, high-velocity system."* ([Bessemer, August 2025](https://www.bvp.com/atlas/the-state-of-ai-2025))

What Bessemer emphasizes is the shape of growth: how fast a company grows and at what margin. Then, in that one sentence, it turns to how the work itself is organized. That is the part I take. Two companies can report the same growth and the same margins and still be built very differently underneath, and Bessemer's question is a good way to start finding out how.

[[more:Investing|New benchmarks]]

### The enterprise operating model (McKinsey)

McKinsey's "seven operating truths" come from interviews with 15 AI-centric companies and describe *"what it takes to successfully place AI at the center of the organization."* It observes that *"jobs are being redefined as collaborations between humans and agents."* ([McKinsey, June 2026](https://www.mckinsey.com/capabilities/business-building/our-insights/the-seven-operating-truths-of-ai-native-companies))

What it emphasizes is the operating model of a company that is already large and in the middle of changing itself. I take the collaboration. A job done by a person and an agent working as one is the picture I recognize. McKinsey drew that picture from inside large companies that are in the middle of changing themselves. I build on it from the other end: small teams and early-stage companies that can work this way from the start.

[[more:Organization|Don't clone the org chart]]

### The builder's playbook (Anthropic)

Anthropic's founder playbook walks through each stage of a startup *"when AI is core to your technical and organizational development,"* and notes that *"the lean 10-person unicorn has gone from scrappy underdog story to deliberate plan of action."* ([Anthropic](https://claude.com/resources/guides/the-founders-playbook-building-an-ai-native-startup))

What it emphasizes is the sequence: how you actually build, once AI is core to the company and not only to the product. I take the sequence, and I take the small team as a deliberate design rather than a stage a company is expected to grow out of. Anthropic's playbook explains how to get there step by step. The definition in this chapter is my attempt to describe what "there" looks like.

### The network standard (Ericsson)

Outside startups, telecom has used "AI native" for years: *"the concept of having intrinsic trustworthy AI capabilities, where AI is a natural part of the functionality, in terms of design, deployment, operation, and maintenance."* Ericsson is plain that *"simply using AI to replace existing or add new functionalities … does not make an implementation AI native,"* and it measures maturity in levels. ([Ericsson](https://www.ericsson.com/en/reports-and-papers/white-papers/ai-native))

What Ericsson emphasizes is a network, not a startup, but two of its ideas travel well outside telecom. The first is that using AI is not the same thing as being AI-native. The second is that you get there by degrees rather than by flipping a switch, which is why Ericsson measures maturity in levels. Both ideas shape the definition below and the test at the end of the chapter.

## A lesson from cloud-native

"Cloud-native" went through this same argument about a decade ago. For a while it meant whatever a vendor needed it to mean. It settled because a community wrote a definition down and kept maintaining it. The Cloud Native Computing Foundation's version is now at v1.1, approved in February 2024, and it describes practices, not products: *"loosely coupled systems that interoperate in a manner that is secure, resilient, manageable, sustainable, and observable."* ([CNCF](https://github.com/cncf/toc/blob/main/DEFINITION.md))

That is what this page is trying to do, on a much smaller scale. The cloud-native definition took years and a whole foundation to settle. This one is a single person keeping a page. But the habit is the same: write down what you mean, give it a version and a date, and when you change your mind, show the edit instead of hiding it.

There is a second parallel, closer to the work itself, because building has gotten cheaper before. Over roughly the past fifteen years, opening an online store went from a custom software project to something one person could set up in a weekend, thanks to hosted commerce platforms, online payments and off-the-shelf logistics. What happened next is instructive. Once the making got cheap, the advantage moved elsewhere: to taste, to distribution, and to everything that has to happen around the tool. A cheap store did not make anyone a good merchant.

The difference this time is how much of the company the change reaches. The last wave made one layer cheaper. You could open a store without a team of engineers, but you still hired people to choose the products, talk to customers and ship the orders. This wave reaches those jobs too. Building, selling, support and the loop that connects them can all change at the same time. Last time, cheaper building changed the store. This time it reaches the whole company around it.

[[diagram:waves]]

## How the words relate

Four phrases often get used as if they meant the same thing. They don't, and the differences become clear once you put each one in a plain sentence.

**AI-enabled**, and its cousins AI-powered and AI-augmented, usually means a feature added to a product or a process that already existed. The product already existed and worked without AI. At some point, a model was added to it. What it describes is a product, or a function inside a company. On the test below, that tends to look like a function automated and a structure left as it was.

**AI-first** is a commitment. A company, often one that already exists, decides that AI will sit at the center of the product and of its decisions. It describes a direction. Duolingo's CEO put it cleanly in April 2025: *"Making minor tweaks to systems designed for humans won't get us there. In many cases, we'll need to start from scratch."* ([The Verge](https://www.theverge.com/news/657594/duolingo-ai-first-replace-contract-workers)) That is a statement about where the company is heading. Whether it has arrived is a different question, and that is what the test is for.

**Agentic** describes a capability. The system doesn't only answer. Agents take actions. That capability matters, and it is not yet a description of the company. Agents without a shared memory, and without a clear point where a person decides, are tools on the side. Shared memory and judgment are what turn the capability into the way the company works.

**AI-native**, as this book uses it, is about that construction. People and agents as one system: shared memory, loops that close fast, and explicit points where human judgment decides. It is a degree, not a badge, and the test is how you read the degree.

[[diagram:words]]

## "AI from day one" is a start date, not a design

Many new companies describe themselves as AI-native because they used AI from their first day. That's true, and it matters: they don't have to undo anything. But on its own it describes when they started, not how they're built. A company can use AI from day one and still be organized like any company of its kind, with the same org chart, knowledge in the founders' heads, and AI in a few tools on the side.

So I don't read the phrase as a claim to argue with. I read it as the start of a better question: *what did you build differently because AI was there from the start?*

[[more:Building|Start AI-native or transform: who wins]]

## A few real points on the spectrum

The examples below are not grades. Each one shows a different part of the picture, and each is dated, because a company's position can change quickly.

- **Anthropic (2026): construction can change over time.** Anthropic has said that as of May 2026 more than 80% of the code merged into its codebase was authored by Claude, up from low single digits before Claude Code launched in early 2025. The figure is self-reported and covers code, not the whole company ([VentureBeat](https://venturebeat.com/technology/anthropic-says-80-of-its-new-production-code-is-now-authored-by-claude-how-your-enterprise-can-keep-up)). Anthropic wasn't founded that way. The AI worked its way into how the company produces what it sells.
- **Crosby (2025): AI-native in how it works, selling something that isn't software.** Crosby is a law firm. It sells contract review, not an AI tool. Its own description is *"a hybrid AI law firm"* that combines *"the speed and intelligence of AI with the safety of lawyers-in-the-loop"* ([Crosby, June 2025](https://crosby.ai/blog/introducing-crosby-the-worlds-first-hybrid-law-firm)). Agents take the first pass, flag common issues and prepare redlines, while its attorneys focus on strategic decisions. It builds a knowledge base for each customer that becomes more bespoke over time ([Sequoia](https://sequoiacap.com/article/partnering-with-crosby-a-law-firm-at-the-speed-of-ai); [TechCrunch](https://techcrunch.com/2025/06/17/sequoia-backed-crosby-launches-a-new-kind-of-ai-powered-law-firm/)). Shared memory, a fast loop and an explicit point where a human decides: it's the definition, in a profession that runs on judgment.

[[more:Judgment|Who signs]]
- **Shopify (2025): an incumbent asking the right question as policy.** Before asking for more headcount, teams *"must demonstrate why they cannot get what they want done using AI"* ([The Verge](https://www.theverge.com/news/644943/shopify-ceo-memo-ai-hires-job)). A company doesn't have to be new to ask the question that matters.
- **Klarna (2024–2025): automation is not the same as design.** Its AI assistant took over about two-thirds of support chats. A year later, the CEO said cost had been *"a too predominant evaluation factor"* and quality suffered, and Klarna brought humans back for more of the work ([CNBC](https://www.cnbc.com/2025/05/14/klarna-ceo-says-ai-helped-company-shrink-workforce-by-40percent.html)). A spokesperson later said the remark referred to outsourced human agents ([Silicon Republic](https://www.siliconrepublic.com/machines/klarna-ai-hiring-humans-forrester)). Getting the human part right is part of the system, not a retreat from it.

## My working definition, and how it evolved

Put the map together and a pattern shows up. Some of these sources are looking at the product, some at the growth, some at a category, some at the operating model. I agree with the direction of that work. The aspect I want to take further is the one underneath the product and the numbers: whether the company itself is built as one system of people and agents.

That aspect matters for three reasons. A small team can learn it faster than a large one, because it has less to undo. A competitor can't simply copy it: anyone can download the same tools, but no one can download the knowledge a company has built up about its customers, its decisions and its own work. And it is the part that is hardest to see from outside, which is why the test later in this chapter has to ask from the inside.

So here's my working definition, as of November 2026:

> **An AI-native company is one whose construction assumes a system of people and agents: shared memory, loops that close fast, and explicit points where human judgment decides.**

[[diagram:system]]

Two cautions come with this definition. The first is that being AI-native is not a moat in itself. It is the speed at which a company can build one, and the advantage it gives over incumbents is real but temporary, because incumbents can rebuild too. The second is that it isn't a yes-or-no label. Companies sit at different points along the way, and the direction a company is moving in matters as much as where it stands today.

[[more:Investing|The moat is not "I use AI"]]

**How this definition evolved.** This isn't the definition I started with, and I'd rather show the change than hide it.

In July 2026 I wrote: *"An AI-native startup is a company whose operating model, infrastructure, and learning loops are built around AI from the beginning."* ([Substack, July 3, 2026](https://lorenzodeleo.substack.com/p/whats-an-ai-native-startup))

I still agree with most of it. Four months of conversations, and of writing the test below, changed four things:

- **"From the beginning" became less important.** I'd put the start date into the definition. Then I kept meeting the counterexamples, including my own July piece, which opened with Anthropic: a company that wasn't founded this way and is getting there gradually. Meanwhile "AI from day one" became something nearly every new company can say. A definition that everyone passes stops separating anything. Now I look at how the company is built, whenever it started.
- **"Built around AI" became "people and agents."** Putting AI at the center made it sound like the goal was to remove people. The same July piece ended somewhere else: the real skill is to *"design a system of people and AI where judgment lands at the right points,"* and to know *"exactly what not to automate."* That conclusion belonged in the definition, not at the end of the essay.
- **"Infrastructure" became "shared memory."** Infrastructure is something anyone can buy. When I tried to write questions that actually separate companies, the ones that worked were about where the company's memory lives and who can read and write it. The context is the asset, not the engine.
- **"Startup" became "company."** An incumbent can rebuild itself this way, and a startup can fail to. The test needs to work for both.

This is a working definition. It's dated on purpose, and I expect it to change again. Probably the next change will come from the judgment side, as agents take on more of the work. Changing my mind in public is part of how this book is supposed to work.

[[diagram:timeline]]

[[cta:hear]]

## The test: questions only the inside of a company can answer

That leaves the practical question: how can you tell how AI-native a company actually is? You can't see it from the website or the product. A pitch can show what a company intends, but it rarely shows how the company is built. Most startups I meet are not AI-native yet, and even the ones that describe themselves that way are usually only part of the way there. It is a matter of degree, and the seven questions below are a way to see that degree from the inside.

The difficulty is that all of this lives inside the company, and nobody publishes their internal setup. So the test has to be a conversation, and it has to ask for evidence. The useful answer is not the company's policy but the last time something actually happened.

An angel investor who sees pitch decks in both New York and Bogotá put the story side of this better than I can. In New York, she told me, it's visible in the pitch whether a company is AI-native. In Latin America, most pitches still say "we have this business model, and we use AI for this part of the process," which leaves the obvious question unanswered: what does that change? The difference she sees is real and worth noticing. But a pitch, however clear, can only show what a company means to be. The questions below are about what it has actually built.

Before the seven questions, there is a warm-up I don't score. I call it question zero: tell me what you sell, in one line, without using the word AI. It comes first because it clears the ground. Being AI-native is about how a company is built, not about what it sells, but in a pitch the two often blur together. If the description only works with "AI" in it, AI may be the story the company tells rather than the way it is built. Once the founder has said plainly what the company sells, the seven questions can look at how it is built without the label getting in the way.

Then:

1. **What did you decide not to hire for, and what carries that work now?** An AI-native team can name a function a company like theirs would normally staff, the system that runs it, and the person who stands behind its output.
2. **Where does the company's memory live, and who can read and write it, people and agents alike?** The tool downloads. The context doesn't. If the knowledge sits in the founders' heads and in a separate island for each tool, the agents start from zero every day.
3. **Tell me about the last time a customer signal changed what you ship or how you sell. How long did it take?** This is the loop I weigh most. A company that does this in days, with the system carrying the signal, is different from one that waits for the quarterly review.
4. **Which decisions have a model in the loop, which never do, and who signs for the result?** The founders who get this right aren't the ones who automate the most. They're the ones who know exactly what not to automate, and who answers when the system is confidently wrong.
5. **What does a new person's first month look like?** In an AI-native company you're onboarded into the system, not into someone's memory.
6. **What breaks first if volume goes 10x tomorrow?** I want a specific bottleneck, usually a point of judgment or trust. "We'd hire in every function" tells me the structure hasn't changed.
7. **If your models switched off for a month, what would stop? And if you changed provider next week, what would you lose?** If only a feature stops, AI sits on top of the company. If changing provider would cost everything, the intelligence is borrowed. The asset should be the context, not the engine.

**How I read the answers.** Each question gets zero, one or two points: tools on the side, a function automated, or a structure built around the system. Add them up and you get a rough percentage. I read it in bands, not as a verdict: *AI-using*, *AI-enabled*, *AI-native in parts* and *AI-native*. Most companies that call themselves AI-native because they used AI from day one honestly sit around AI-enabled. That isn't a criticism. As above, day one is a start date, not a design.

Three cautions apply to how the score is read. First, this is not a quality score. A company can be early on this scale and a great business, or far along the scale and still a poor business for reasons that have nothing to do with the scale. The test does not make that call. Second, it is not a moat score either. AI-native is not a moat; it's the rate at which you build one, and the edge over incumbents closes as they catch up. Third, a company's age doesn't decide its score. Shopify, a company founded long before this wave, wrote question one into policy. Klarna found its answer to question four the hard way, when it had to bring people back into its support work.

**ENYA, as of November 2026.** *This part will change as the system does; the date is here on purpose.*

ENYA is the fund I am building, and I hold it to the same test because it is the setup I can see from the inside. It is one example. It is not the best way, and it is not the only one. Advisors and collaborators are part of the work around the fund, and they sit outside this setup. They have no access to the memory, and no access to the agents.

I am the only human inside it. There is one shared memory of people, conversations, decisions and content, and both a small set of agents and I read from it and write to it. Each agent has a job: research, publishing, relationships. Nothing enters the memory without a validation step, and nothing goes out under my name until I have approved that specific piece. On the test, the memory and the judgment map are where I want them. The learning loop runs in days to weeks, not continuously, so it is still slower than I would like. How the system is put together belongs in Technology.

[[more:Technology|The tool downloads. The context doesn't.]]

Until August, I wasn't asking these questions explicitly when I talked with founders. For someone whose whole thesis is about AI-native companies, that was a gap, and writing this test is how I'm closing it.

The method is the part worth copying: shared memory, clear judgment points, loops that close. The implementation is not. What works for one person building a fund will not map onto a clinic or a logistics company. ENYA is one point on that scale, not the measure of anyone else.

[[cta:cases]]

## What's next

Three things I expect to change on this page.

First, the judgment question. As agents take on more of the work, I expect question four, *who signs for the result*, to become most of the test.

[[more:Judgment|Trust before autonomy]]

Second, the word itself. IBM predicts the term's usefulness will fade as AI becomes ubiquitous, and I think that's right. "Internet company" stopped meaning anything once every company was one. When that happens to "AI-native," the question underneath won't go away. It will just stop needing a label.

Third, the cases. Right now this page leans on examples from the US. The Latin American ones I'm looking for will probably look different. They'll be built with less capital, closer to the customer and with less room for fake progress.

[[more:Investing|The view from Latin America]]

The label will fade. What will be left is the design question: how do people and agents work as one system, and who builds that system first?

---

## Sources

**Definitions**
- CRV, "What Is AI-Native? The Founder's Guide (2026)," March 31, 2026. https://www.crv.com/content/what-is-ai-native
- IBM, "What is AI native?", February 3, 2026. https://www.ibm.com/think/topics/ai-native
- Y Combinator, Requests for Startups, Summer 2026 batch: Diana Hu, "The AI Operating System for Companies"; Gustaf Alströmer, "AI-Native Service Companies." https://www.ycombinator.com/rfs
- a16z, "The AI Application Spending Report: Where Startup Dollars Really Go," October 2, 2025. https://a16z.com/the-ai-application-spending-report-where-startup-dollars-really-go/
- Emergence Capital, "The AI-Native Services Playbook," March 30, 2026. https://www.emcap.com/thoughts/the-ai-native-services-playbook
- Bessemer Venture Partners, "The State of AI 2025," August 13, 2025. https://www.bvp.com/atlas/the-state-of-ai-2025
- McKinsey, "The seven operating truths of AI-native companies," June 11, 2026. https://www.mckinsey.com/capabilities/business-building/our-insights/the-seven-operating-truths-of-ai-native-companies
- Anthropic, "The Founder's Playbook: Building an AI-Native Startup." https://claude.com/resources/guides/the-founders-playbook-building-an-ai-native-startup
- Ericsson, "Defining AI native: A key enabler for advanced intelligent telecom networks." https://www.ericsson.com/en/reports-and-papers/white-papers/ai-native
- Cloud Native Computing Foundation, Cloud Native Definition v1.1. https://github.com/cncf/toc/blob/main/DEFINITION.md

**Examples**
- Duolingo CEO memo, April 2025, via The Verge. https://www.theverge.com/news/657594/duolingo-ai-first-replace-contract-workers
- Anthropic code share, via VentureBeat, June 2026. https://venturebeat.com/technology/anthropic-says-80-of-its-new-production-code-is-now-authored-by-claude-how-your-enterprise-can-keep-up
- Crosby, "Introducing Crosby, the world's first hybrid law firm," June 17, 2025. https://crosby.ai/blog/introducing-crosby-the-worlds-first-hybrid-law-firm
- Sequoia, "Partnering with Crosby: A Law Firm at the Speed of AI," June 17, 2025. https://sequoiacap.com/article/partnering-with-crosby-a-law-firm-at-the-speed-of-ai
- TechCrunch, "Sequoia-backed Crosby launches a new kind of AI-powered law firm," June 17, 2025. https://techcrunch.com/2025/06/17/sequoia-backed-crosby-launches-a-new-kind-of-ai-powered-law-firm/
- Shopify CEO memo, April 2025, via The Verge. https://www.theverge.com/news/644943/shopify-ceo-memo-ai-hires-job
- Klarna, via CNBC, May 2025. https://www.cnbc.com/2025/05/14/klarna-ceo-says-ai-helped-company-shrink-workforce-by-40percent.html
- Klarna spokesperson clarification, via Silicon Republic. https://www.siliconrepublic.com/machines/klarna-ai-hiring-humans-forrester

**Earlier writing**
- Lorenzo de Leo, "What's an AI-native startup?", July 3, 2026. https://lorenzodeleo.substack.com/p/whats-an-ai-native-startup
