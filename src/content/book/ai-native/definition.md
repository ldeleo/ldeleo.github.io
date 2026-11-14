---
title: "What is an AI-native company?"
book: "The AI-Native Company"
topic: "Definition"
slug: "ai-native/definition"
lang: "en"
description: "What is an AI-native company? A map of how the phrase is used, what each source emphasizes, a working definition, and seven questions that show how far along a company is."
author: "Lorenzo de Leo"
datePublished: "2026-11-13"
dateModified: "2026-11-14"
version: "v0.2"
keyPoints:
  - "The phrase is doing several jobs at once, so this chapter opens with a map instead of a verdict."
  - "Using AI from the first day names a start date, not a design."
  - "Each source lights up a different side of AI-native, and this chapter builds on all of them."
  - "Cloud-native settled a similar argument by writing the definition down, and this wave reaches more of the company than the last time building got cheaper."
  - "You cannot tell how AI-native a company is from its website, but seven questions about how it is built can."
changelog:
  - version: "v0.2"
    date: "2026-11-14"
    note: "Reframed the source map as research, moved the spine to the book page, and described ENYA as one person working with agents."
  - version: "v0.1"
    date: "2026-11-13"
    note: "Draft. First version of the Definition topic: map of definitions, examples, working definition (replaces the July 2026 wording) and the AI-native test."
---

# What is an AI-native company?

The phrase is everywhere this year. It shows up in pitch decks, in memos from public-company CEOs, in a request for startups, and in a telecom standard that has been using a cousin of the term for years. In 2026, "AI startup" is what "internet company" was in 2005: a label that is true of almost everyone, and thinner every month. "AI-native" was supposed to be the sharper version. It has come to mean several useful things at once.

I don't read that as a mess. A venture firm, a research team, a consultancy, a network engineer, and a founder are answering different questions with the same word. None of them is wrong. So this chapter is a map first. The one-line claim the rest of the book hangs on, the spine, lives on the [book page](/ai-native#spine). What follows here is the research, then the definition I actually use, then a way to tell how far along a company is. The book is written in public. When a view on this page changes, the changelog at the bottom records it.

## Why "AI-native" means several things at once

A venture firm uses the phrase to name a market category. A research team uses it to describe a growth pattern. A consultancy uses it for an enterprise operating model. A telecom standard uses it for a network. A founder uses it to say "we used AI from day one." They are not disagreeing so much as they are pointing at different parts of the same object.

The honest way in is a map, not a verdict. Each source had its own job, and I read it for that job. Below, I say which side of AI-native each one lights up, and what I take from it. The rest of the chapter goes further on those sides, until they become a definition and a test.

## The map

Here's what nine sources emphasize, in their own words, and what I take from each.

### The product test (CRV)

CRV's founder guide asks one question: *"if you remove the AI, does the product cease to function?"* It adds a second question I have started asking myself: *"when the models get better, are you happy or sad?"* ([CRV, March 2026](https://www.crv.com/content/what-is-ai-native))

What it emphasizes is the product: whether the AI is the thing or a feature on the thing, and whether better models help you. I take both questions. They are a clear way to look at what a company sells, which is the job of a founder's guide, and I use them for that. How the company is built is the other side of the same subject, and that is what the test at the end of this page is for. Roles follow from that construction. They are a corollary of the definition, and I come back to them later.

### The system definition (IBM)

IBM defines AI-native as something *"designed from the ground up with AI as a core component, not bolted on later as a mere feature."* It notes that legacy enterprises can qualify if they *"comprehensively re-orient their business model around data and AI models,"* and it predicts that *"the term's usefulness [will] fade over time as AI's ubiquity advances."* ([IBM, February 2026](https://www.ibm.com/think/topics/ai-native))

What it emphasizes is the system: AI as a core component of the design, not a layer added at the end, and a path for companies that were not born this way. I take all three. IBM's definition is well aligned with the one I use. Who does which job follows from that construction, and I go further on it in the chapters on judgment and organization. I also take the prediction. The word will fade. The design question will not.

### The market category (Y Combinator)

Y Combinator opened its Summer 2026 Requests for Startups with *"AI has stopped being a feature and started being the foundation."* One request asks for *"AI-native companies that don't sell software—they sell the service. Instead of giving you a tool, they just do the work."* Another, "The AI Operating System for Companies," starts from this observation: *"The best AI-native companies we're seeing have figured out something most haven't: they've made their entire company queryable."* It describes the result as turning *"a company from an open loop into a closed loop."* ([Y Combinator, Requests for Startups, Summer 2026](https://www.ycombinator.com/rfs))

What it emphasizes is where founders might build next. I read it as a request for startups, which is the job it was written for, and I take two things from it. The first is the company that sells the work rather than the tool. The second is the queryable company, the firm that can be read and written as one system, an open loop closed. That second idea is one I build on. [→ Technology: The tool downloads. The context doesn't.]

### The buying pattern (a16z)

a16z's spending report observes that *"while big companies are getting incremental benefits to existing team structures, at startups we're seeing truly AI-native companies emerge."* It splits vertical AI into products that supercharge human employees and ones that act as *"AI employees."* ([a16z, October 2025](https://a16z.com/the-ai-application-spending-report-where-startup-dollars-really-go/))

What it emphasizes is the market: what companies are actually paying for, and where that spend shows up. I take the split. Tools that make a person faster, and tools that do a job a person used to do, are different purchases, and a spending report is exactly the place to see that. I build on the split when I look at how a company is built.

### The business model (Emergence Capital)

Emergence names a category, AI-native services: companies that sell the outcome rather than the tool. It also names a trap, *"Mirage PMF: The illusion of product-market fit created by revenue growth that's powered by human labor rather than AI leverage."* ([Emergence, March 2026](https://www.emcap.com/thoughts/the-ai-native-services-playbook))

What it emphasizes is one business model, services, and a failure mode inside it. I take Mirage PMF, and I use it beyond services. Fast revenue that is still a room of people doing the work by hand is a signal about the construction, whatever the company sells. [→ Building: Product-market fit in an AI-native company]

### The growth profile (Bessemer)

Bessemer's State of AI benchmarks two kinds of AI startups, "Supernovas" and "Shooting Stars," by growth and margin. On how the best teams work, it asks a question I want to leave standing, because it is a great one: *"Today, the question isn't if your team uses AI, but how well you orchestrate it into a compounding, high-velocity system."* ([Bessemer, August 2025](https://www.bvp.com/atlas/the-state-of-ai-2025))

What it emphasizes is the shape of growth, and then, in that one sentence, the work of orchestration. I take the question, and I want to keep it in front of me. Two companies can post the same numbers and be built in different ways, and the question is what I follow from there. [→ Investing: New benchmarks]

### The enterprise operating model (McKinsey)

McKinsey's "seven operating truths" come from interviews with 15 AI-centric companies and describe *"what it takes to successfully place AI at the center of the organization."* It observes that *"jobs are being redefined as collaborations between humans and agents."* ([McKinsey, June 2026](https://www.mckinsey.com/capabilities/business-building/our-insights/the-seven-operating-truths-of-ai-native-companies))

What it emphasizes is the operating model of a company that is already large and in the middle of changing itself. I take the collaboration. A job that is a person and an agent, working as one, is the picture I recognize. McKinsey drew it from that seat. I build on the same picture from a smaller starting point. [→ Organization: Don't clone the org chart]

### The builder's playbook (Anthropic)

Anthropic's founder playbook walks through each stage of a startup *"when AI is core to your technical and organizational development,"* and notes that *"the lean 10-person unicorn has gone from scrappy underdog story to deliberate plan of action."* ([Anthropic](https://claude.com/resources/guides/the-founders-playbook-building-an-ai-native-startup))

What it emphasizes is the sequence: how you actually build, once AI is core to the company and not only to the product. I take the sequence, and I take the small team as a design rather than a holding pattern. The aim those steps serve is the definition on this page.

### The network standard (Ericsson)

Outside startups, telecom has used "AI native" for years: *"the concept of having intrinsic trustworthy AI capabilities, where AI is a natural part of the functionality, in terms of design, deployment, operation, and maintenance."* Ericsson is plain that *"simply using AI to replace existing or add new functionalities … does not make an implementation AI native,"* and it measures maturity in levels. ([Ericsson](https://www.ericsson.com/en/reports-and-papers/white-papers/ai-native))

What it emphasizes is a network, not a startup. I take two moves that were written for that domain and travel cleanly out of it. Using AI is not the same thing as being AI-native. And you arrive by degrees, not by a switch. Both of those are in the definition below, and in the test.

## A lesson from cloud-native

"Cloud-native" went through this same argument about a decade ago. For a while it meant whatever a vendor needed it to mean. It settled because a community wrote a definition down and kept maintaining it. The Cloud Native Computing Foundation's version is now at v1.1, approved in February 2024, and it describes practices, not products: *"loosely coupled systems that interoperate in a manner that is secure, resilient, manageable, sustainable, and observable."* ([CNCF](https://github.com/cncf/toc/blob/main/DEFINITION.md))

That is the ambition of this page. A working definition, versioned, dated, and corrected in public when it is wrong. The cloud version took years and a foundation. This one is a person keeping a page. The habit is the same: write down what you mean, and show the edit when you change your mind.

There is a second parallel, closer to the work itself. Building has gotten cheaper before. Over roughly the past fifteen years, standing up a store went from a custom project to something a person can do in a weekend: hosted commerce, payments, off-the-shelf logistics. The same thing happened. When the making gets cheap, the advantage moves, toward taste, distribution, and the operation around the tool. A cheap store did not make a good merchant.

Where it is not the same is the width of the wave. That one cheapened a layer. You could open the store without a team of engineers, and you still hired people to merchandise, to talk to customers, and to fulfill. This wave reaches those jobs too. Building, selling, support, and the loop that connects them can all move at once. Last time, cheaper building changed the store. This time it reaches the company around it.

## How the words relate

Four phrases get used as if they were one. They are not, and the differences are ordinary once you say them in sentences.

**AI-enabled**, and its cousins AI-powered and AI-augmented, usually means a feature added to a product or a process that already existed. The product was a product. Then it grew a model. What it describes is a product, or a function inside a company. On the test below, that tends to look like a function automated and a structure left as it was.

**AI-first** is a commitment. A company, often one that already exists, decides that AI will sit at the center of the product and of its decisions. It describes a direction. Duolingo's CEO put it cleanly in April 2025: *"Making minor tweaks to systems designed for humans won't get us there. In many cases, we'll need to start from scratch."* ([The Verge](https://www.theverge.com/news/657594/duolingo-ai-first-replace-contract-workers)) That is a statement about where the company is heading. Whether it has arrived is a different question, and that is what the test is for.

**Agentic** describes a capability. The system doesn't only answer. Agents take actions. That capability matters, and it is not yet a description of the company. Agents without a shared memory, and without a clear point where a person decides, are tools on the side. Shared memory and judgment are what turn the capability into the way the company works.

**AI-native**, as this book uses it, is about that construction. People and agents as one system: shared memory, loops that close fast, and explicit points where human judgment decides. It is a degree, not a badge, and the test is how you read the degree.

The table is the same distinction, compressed.

| Term | How it's usually used | What it describes | How the test reads it |
|---|---|---|---|
| **AI-enabled** (or AI-powered, AI-augmented) | AI features added to a product or process that existed before | A product or a function | A function automated, the structure unchanged |
| **AI-first** | A company that makes AI central to its product and decisions, often an existing company committing to change | A strategic commitment | A direction, not a place you arrive |
| **Agentic** | Systems or organizations where AI agents take actions, not just answer | A capability of the system | Part of the picture, once memory and judgment are there |
| **AI-native** (as used in this book) | People and agents working as one system, with shared memory, closed loops and explicit judgment points | How the company is built | A degree, read with the test |

## "AI from day one" is a start date, not a design

Many new companies describe themselves as AI-native because they used AI from their first day. That's true, and it matters: they don't have to undo anything. But on its own it describes when they started, not how they're built. A company can use AI from day one and still be organized like any company of its kind, with the same org chart, knowledge in the founders' heads, and AI in a few tools on the side.

So I don't read the phrase as a claim to argue with. I read it as the start of a better question: *what did you build differently because AI was there from the start?* [→ Building: Start AI-native or transform: who wins]

## A few real points on the spectrum

None of these is a verdict. Each shows a different part of the picture, with the date it was true.

- **Anthropic (2026): construction can change over time.** Anthropic has said that as of May 2026 more than 80% of the code merged into its codebase was authored by Claude, up from low single digits before Claude Code launched in early 2025. The figure is self-reported and covers code, not the whole company ([VentureBeat](https://venturebeat.com/technology/anthropic-says-80-of-its-new-production-code-is-now-authored-by-claude-how-your-enterprise-can-keep-up)). Anthropic wasn't founded that way. The AI worked its way into how the company produces what it sells.
- **Crosby (2025): AI-native in how it works, selling something that isn't software.** Crosby is a law firm. It sells contract review, not an AI tool. Its own description is *"a hybrid AI law firm"* that combines *"the speed and intelligence of AI with the safety of lawyers-in-the-loop"* ([Crosby, June 2025](https://crosby.ai/blog/introducing-crosby-the-worlds-first-hybrid-law-firm)). Agents take the first pass, flag common issues and prepare redlines, while its attorneys focus on strategic decisions. It builds a knowledge base for each customer that becomes more bespoke over time ([Sequoia](https://sequoiacap.com/article/partnering-with-crosby-a-law-firm-at-the-speed-of-ai); [TechCrunch](https://techcrunch.com/2025/06/17/sequoia-backed-crosby-launches-a-new-kind-of-ai-powered-law-firm/)). Shared memory, a fast loop and an explicit point where a human decides: it's the definition, in a profession that runs on judgment [→ Judgment: Who signs].
- **Shopify (2025): an incumbent asking the right question as policy.** Before asking for more headcount, teams *"must demonstrate why they cannot get what they want done using AI"* ([The Verge](https://www.theverge.com/news/644943/shopify-ceo-memo-ai-hires-job)). Age doesn't decide it.
- **Klarna (2024–2025): automation is not the same as design.** Its AI assistant took over about two-thirds of support chats. A year later, the CEO said cost had been *"a too predominant evaluation factor"* and quality suffered, and Klarna brought humans back for more of the work ([CNBC](https://www.cnbc.com/2025/05/14/klarna-ceo-says-ai-helped-company-shrink-workforce-by-40percent.html)). A spokesperson later said the remark referred to outsourced human agents ([Silicon Republic](https://www.siliconrepublic.com/machines/klarna-ai-hiring-humans-forrester)). Getting the human part right is part of the system, not a retreat from it.

## My working definition, and how it evolved

Put the map together and a pattern shows up. Some of these sources are looking at the product, some at the growth, some at a category, some at the operating model. I agree with the direction of that work. The aspect I want to take further is the one underneath the product and the numbers: whether the company itself is built as one system of people and agents.

That's the part a small team can learn faster than a large one. It's the part a competitor can't download: the tool downloads, the context doesn't. And it's the part that's hardest to see from outside.

So here's my working definition, as of November 2026:

> **An AI-native company is one whose construction assumes a system of people and agents: shared memory, loops that close fast, and explicit points where human judgment decides.**

Two cautions travel with it. It isn't a moat. It's the rate at which you build one, and the edge over incumbents is real but temporary [→ Investing: The moat is not "I use AI"]. And it isn't binary. Companies are 40%, 60% or 80% of the way there, and the direction matters as much as the level.

**How this definition evolved.** This isn't the definition I started with, and I'd rather show the change than hide it.

In July 2026 I wrote: *"An AI-native startup is a company whose operating model, infrastructure, and learning loops are built around AI from the beginning."* ([Substack, July 3, 2026](https://lorenzodeleo.substack.com/p/whats-an-ai-native-startup))

I still agree with most of it. Four months of conversations, and of writing the test below, changed four things:

- **"From the beginning" became less important.** I'd put the start date into the definition. Then I kept meeting the counterexamples, including my own July piece, which opened with Anthropic: a company that wasn't founded this way and is getting there gradually. Meanwhile "AI from day one" became something nearly every new company can say. A definition that everyone passes stops separating anything. Now I look at how the company is built, whenever it started.
- **"Built around AI" became "people and agents."** Putting AI at the center made it sound like the goal was to remove people. The same July piece ended somewhere else: the real skill is to *"design a system of people and AI where judgment lands at the right points,"* and to know *"exactly what not to automate."* That conclusion belonged in the definition, not at the end of the essay.
- **"Infrastructure" became "shared memory."** Infrastructure is something anyone can buy. When I tried to write questions that actually separate companies, the ones that worked were about where the company's memory lives and who can read and write it. The context is the asset, not the engine.
- **"Startup" became "company."** An incumbent can rebuild itself this way, and a startup can fail to. The test needs to work for both.

This is a working definition. It's dated on purpose, and I expect it to change again. Probably the next change will come from the judgment side, as agents take on more of the work. Changing my mind in public is part of how this book is supposed to work.

[[cta:hear]]

## The test: questions only the inside of a company can answer

Which leaves the practical question. If you can't see it from the website, how do you tell?

You can't tell whether a company is AI-native from its website, its product or its pitch. You can tell from seven questions about how it is built. The answer is almost never yes or no. It's a degree: most companies I meet are AI-native in parts, maybe 60% or 80% of the way, and the useful conversation is about the rest.

The difficulty is that this lives inside the company. Nobody publishes their internal setup. So the test has to be a conversation, and it has to ask for evidence: the last time something happened, not the policy.

An angel investor who sees pitch decks in both New York and Bogotá put the problem better than I can. In New York, she told me, it's visible in the pitch whether a company is AI-native. In Latin America, most pitches still say "we have this business model, and we use AI for this part of the process." *And so what?* That's the gap the test is for.

I start with a warm-up I don't score: *tell me what you sell in one line, without the word AI.* Then:

1. **What did you decide not to hire for, and what carries that work now?** An AI-native team can name a function a company like theirs would normally staff, the system that runs it, and the person who stands behind its output.
2. **Where does the company's memory live, and who can read and write it, people and agents alike?** The tool downloads. The context doesn't. If the knowledge sits in the founders' heads and in a separate island for each tool, the agents start from zero every day.
3. **Tell me about the last time a customer signal changed what you ship or how you sell. How long did it take?** This is the loop I weigh most. A company that does this in days, with the system carrying the signal, is different from one that waits for the quarterly review.
4. **Which decisions have a model in the loop, which never do, and who signs for the result?** The founders who get this right aren't the ones who automate the most. They're the ones who know exactly what not to automate, and who answers when the system is confidently wrong.
5. **What does a new person's first month look like?** In an AI-native company you're onboarded into the system, not into someone's memory.
6. **What breaks first if volume goes 10x tomorrow?** I want a specific bottleneck, usually a point of judgment or trust. "We'd hire in every function" tells me the structure hasn't changed.
7. **If your models switched off for a month, what would stop? And if you changed provider next week, what would you lose?** If only a feature stops, AI sits on top of the company. If changing provider would cost everything, the intelligence is borrowed. The asset should be the context, not the engine.

**How I read the answers.** Each question gets zero, one or two points: tools on the side, a function automated, or a structure built around the system. Add them up and you get a rough percentage. I read it in bands, not as a verdict: *AI-using*, *AI-enabled*, *AI-native in parts* and *AI-native*. Most companies that call themselves AI-native because they used AI from day one honestly sit around AI-enabled. That isn't a criticism. As above, day one is a start date, not a design.

Three cautions. This is not a quality score. A company can be early on this scale and a great business, or far along the scale and still a poor business for reasons that have nothing to do with the scale. The test does not make that call. It is not a moat score either. AI-native is not a moat; it's the rate at which you build one, and the edge over incumbents closes as they catch up. And age doesn't decide it. Shopify's memo asked question one as policy. Klarna answered question four the hard way.

**ENYA, as of November 2026.** *This part will change as the system does; the date is here on purpose.*

ENYA is the fund I am building, and I hold it to the same test because it is the setup I can see from the inside. It is one example. It is not the best way, and it is not the only one. Advisors and collaborators are part of the work around the fund, and they sit outside this setup. They have no access to the memory, and no access to the agents.

I am the only human inside it. There is one memory of people, conversations, decisions, and content, which I and a small set of agents both read and write. Each agent has a job: research, publishing, relationships. Nothing enters the memory without a validation step, and nothing goes out under my name until I have approved that specific piece. On the test, the memory and the judgment map are where I want them. The learning loop runs in days to weeks, not continuously, so it is still slower than I would like. How the system is put together belongs in Technology. [→ Technology: The tool downloads. The context doesn't.]

Until August, I wasn't asking these questions explicitly in conversations with founders, and they weren't on the fund's intake form. A fund built on an AI-native thesis wasn't asking its own question. Writing this test is how I'm fixing that.

The method is the part worth copying: shared memory, clear judgment points, loops that close. The implementation is not. What works for one person building a fund will not map onto a clinic or a logistics company. ENYA is one point on the scale. I have met many companies that look 60% or 80% of the way there. I have not been inside them. AI-native is a degree.

[[cta:cases]]

## What's next

Three things I expect to change on this page.

First, the judgment question. As agents take on more of the work, I expect question four, *who signs for the result*, to become most of the test [→ Judgment: Trust before autonomy].

Second, the word itself. IBM predicts the term's usefulness will fade as AI becomes ubiquitous, and I think that's right. "Internet company" stopped meaning anything once every company was one. When that happens to "AI-native," the question underneath won't go away. It will just stop needing a label.

Third, the cases. Right now this page leans on examples from the US. The Latin American ones I'm looking for will probably look different. They'll be built with less capital, closer to the customer and with less room for fake progress [→ Investing: The view from Latin America].

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
