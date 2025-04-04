import { lookUp, card, level, inventory } from './commands/user.js'
import { cookie } from './commands/cookie.js'
import { guild } from './commands/guild/guilds.js'
import { info } from './commands/info.js'
import { status } from './commands/status.js'
import { store } from './commands/store/store.js'
import { random } from './commands/random.js'
import { place } from './commands/place.js'
import { SlashCommandBuilder } from 'discord.js'
import { search } from './commands/search/search.js'
import { blog } from './commands/blog.js'
import { friends } from './commands/user/friends.js'
import { forumpost } from './forums/forum-post.js'
import { thegreatdivide } from './commands/thegreatdivide/main.js'

export default [
  {
    data: new SlashCommandBuilder()
      .setName('cookie')
      .setDescription('🍪'),
    execute: cookie
  },
  {
    data: new SlashCommandBuilder()
      .setName('the-great-divide')
      .setDescription('View team information regarding the ongoing event - The Great Divide')
      .addSubcommand(subcommand =>
        subcommand
          .setName('round')
          .setDescription('View information about a specific round')
          .addIntegerOption(option =>
            option.setName('id')
              .setDescription('Enter the ID of the round')
              .setMinValue(65)
              .setRequired(false)
          )
      )
      .addSubcommand(subcommand =>
        subcommand
          .setName('user')
          .setDescription('View information about a specific user')
          .addStringOption(option =>
            option.setName('username')
              .setDescription('Enter the username of the player you wish to seek information about')
              .setRequired(true)
          )
      )
      .addSubcommand(subcommand =>
        subcommand
          .setName('leaderboard')
          .setDescription('View a leaderboard of the top users participating in The Great Divide')
      )
      .addSubcommand(subcommand =>
        subcommand
          .setName('summary')
          .setDescription('View a summary of the event')
      ),
    execute: thegreatdivide
  },
  {
    data: new SlashCommandBuilder()
      .setName('status')
      .setDescription('Checks to see if Polytoria is online/offline'),
    execute: status
  },
  {
    data: new SlashCommandBuilder()
      .setName('store')
      .setDescription('View the info of a store item via its store ID')
      .addIntegerOption(option =>
        option.setName('id')
          .setDescription('ID of the store item to view')
          .setMinValue(1)
          .setRequired(true)
      ),
    execute: store
  },
  {
    data: new SlashCommandBuilder()
      .setName('place')
      .setDescription('View the info of a place via its place ID')
      .addIntegerOption(option =>
        option.setName('id')
          .setDescription('ID of the place to view')
          .setMinValue(1)
          .setRequired(true)
      ),
    execute: place
  },
  {
    data: new SlashCommandBuilder()
      .setName('forum-post')
      .setDescription('View the info of a forum post on Polytoria')
      .addIntegerOption(option =>
        option.setName('id')
          .setDescription('ID of the forum post to view')
          .setMinValue(1)
          .setRequired(true)
      ),
    execute: forumpost
  },
  {
    data: new SlashCommandBuilder()
      .setName('guild')
      .setDescription('View the info of a guild via its guild ID')
      .addIntegerOption(option =>
        option.setName('id')
          .setDescription('ID of the guild to view')
          .setMinValue(1)
          .setRequired(true)
      ),
    execute: guild
  },
  {
    data: new SlashCommandBuilder()
      .setName('card')
      .setDescription('Gives you an image with information about the specified user')
      .addStringOption(option =>
        option.setName('username')
          .setDescription("User's username you want to view")
          .setRequired(true)
      ),
    execute: card
  },
  {
    data: new SlashCommandBuilder()
      .setName('lookup')
      .setDescription('Lookup information about the specified user')
      .addStringOption(option =>
        option.setName('username')
          .setDescription("User's username you want to view")
          .setRequired(true)
      ),
    execute: lookUp
  },
  {
    data: new SlashCommandBuilder()
      .setName('friends')
      .setDescription('Lookup friends of a specified user')
      .addStringOption(option =>
        option.setName('username')
          .setDescription('Username of the persons friends you want to view')
          .setRequired(true)
      ),
    execute: friends
  },
  {
    data: new SlashCommandBuilder()
      .setName('inventory')
      .setDescription('View the inventory of the specified user')
      .addStringOption(option =>
        option.setName('username')
          .setDescription("User's username you want to view")
          .setRequired(true)
      ),
    execute: inventory
  },
  {
    data: new SlashCommandBuilder()
      .setName('level')
      .setDescription('View the level of the specified user')
      .addStringOption(option =>
        option.setName('username')
          .setDescription("User's username you want to view")
          .setRequired(true)
      ),
    execute: level
  },
  {
    data: new SlashCommandBuilder()
      .setName('search')
      .setDescription('Search Polytoria')
      .addSubcommand(subCommand =>
        subCommand.setName('place')
          .setDescription('Search for places')
          .addStringOption(option => option.setName('query').setDescription('The search query'))
      )
      .addSubcommand(subCommand =>
        subCommand.setName('store')
          .setDescription('Search for store items')
          .addStringOption(option => option.setName('query').setDescription('The search query'))
      )
      .addSubcommand(subCommand =>
        subCommand.setName('toolbox')
          .setDescription('Search for toolbox items')
          .addStringOption(option => option.setName('query').setDescription('The search query'))
      )
      .addSubcommand(subCommand =>
        subCommand.setName('user')
          .setDescription('Search for users')
          .addStringOption(option => option.setName('query').setDescription('The search query'))
      ),
    execute: search
  },
  {
    data: new SlashCommandBuilder()
      .setName('random')
      .setDescription('Get random things from Polytoria'),
    execute: random
  },
  {
    data: new SlashCommandBuilder()
      .setName('info')
      .setDescription('Information about Polytoria Community Bot'),
    execute: info
  },
  {
    data: new SlashCommandBuilder()
      .setName('blog')
      .setDescription('Fetch latest blog posts from the Polytoria Blog'),
    execute: blog
  }
]
