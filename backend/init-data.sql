-- Active: 1770773132499@@mysql5.sqlpub.com@3310@nest_test
INSERT INTO `categories` (`id`, `name`, `slug`, `description`, `icon`, `parent_id`, `sort`, `is_show`, `is_home`, `tool_count`) VALUES
(1, 'AI聊天助手', 'ai-chat', '智能对话机器人，支持多轮对话、问答、创作等功能的AI聊天工具', '/icons/chat.svg', NULL, 1, 1, 1, 0),
(2, 'AI写作工具', 'ai-writing', 'AI写作助手，帮助用户快速生成文章、文案、论文、小说等各类文本内容', '/icons/writing.svg', NULL, 2, 1, 1, 0),
(3, 'AI图像工具', 'ai-image', 'AI图像生成和编辑工具，支持文生图、图生图、图像增强、抠图等功能', '/icons/image.svg', NULL, 3, 1, 1, 0),
(4, 'AI视频工具', 'ai-video', 'AI视频生成与编辑工具，支持文生视频、视频剪辑、数字人等功能', '/icons/video.svg', NULL, 4, 1, 1, 0),
(5, 'AI音频工具', 'ai-audio', 'AI音频处理工具，包括语音合成、音乐生成、声音克隆、配音等', '/icons/audio.svg', NULL, 5, 1, 1, 0),
(6, 'AI办公工具', 'ai-office', 'AI办公效率工具，提升文档处理、PPT制作、表格分析等办公效率', '/icons/office.svg', NULL, 6, 1, 1, 0),
(7, 'AI编程工具', 'ai-coding', 'AI编程辅助工具，支持代码生成、代码补全、代码审查、Debug等', '/icons/coding.svg', NULL, 7, 1, 1, 0),
(8, 'AI设计工具', 'ai-design', 'AI设计工具，包括UI设计、Logo设计、海报设计、3D建模等', '/icons/design.svg', NULL, 8, 1, 1, 0),
(9, 'AI智能体', 'ai-agent', 'AI Agent智能体平台，支持创建自定义AI助手和自动化工作流', '/icons/agent.svg', NULL, 9, 1, 1, 0),
(10, 'AI搜索引擎', 'ai-search', 'AI驱动的智能搜索引擎，提供更精准的搜索结果和答案', '/icons/search.svg', NULL, 10, 1, 1, 0),
(11, 'AI开发平台', 'ai-platform', 'AI模型开发和部署平台，提供API接口和开发工具', '/icons/platform.svg', NULL, 11, 1, 1, 0),
(12, 'AI训练模型', 'ai-model', 'AI模型训练和微调平台，开源模型下载和模型托管服务', '/icons/model.svg', NULL, 12, 1, 1, 0),
(13, 'AI学习网站', 'ai-learning', 'AI学习教程和课程网站，学习人工智能和机器学习知识', '/icons/learning.svg', NULL, 13, 1, 1, 0),
(14, 'AI内容检测', 'ai-detection', 'AI内容检测工具，识别AI生成的文本、查重、抄袭检测等', '/icons/detection.svg', NULL, 14, 1, 1, 0),
(15, 'AI提示指令', 'ai-prompt', 'AI提示词工具和Prompt优化平台，提升AI输出质量', '/icons/prompt.svg', NULL, 15, 1, 1, 0);


INSERT INTO `tools` (`name`, `slug`, `logo`, `website`, `short_desc`, `content`, `category_id`, `is_free`, `is_chinese`, `is_open_source`, `has_api`, `is_recommend`, `status`, `sort`, `seo_title`, `seo_description`) VALUES

('ChatGPT', 'chatgpt', '/logos/chatgpt.png', 'https://chat.openai.com', 'OpenAI开发的AI对话助手，支持多轮对话、代码生成、文本创作等', '<h2>ChatGPT介绍</h2><p>ChatGPT是OpenAI开发的大型语言模型，基于GPT-4架构，能够进行自然语言对话、回答问题、创作内容、编写代码等。</p><h3>主要功能</h3><ul><li>多轮对话交流</li><li>代码编写与调试</li><li>文章写作与润色</li><li>翻译与语言学习</li><li>数据分析与处理</li></ul>', 1, 0, 1, 0, 1, 1, 1, 1, 'ChatGPT - OpenAI智能对话助手', 'ChatGPT是OpenAI开发的AI对话机器人，支持中文对话、代码生成、文章写作等功能'),

('Claude', 'claude', '/logos/claude.png', 'https://claude.ai', 'Anthropic开发的AI助手，擅长长文本处理和深度分析', '<h2>Claude介绍</h2><p>Claude是Anthropic公司开发的AI助手，以其出色的长文本处理能力和安全性著称，支持200K上下文窗口。</p><h3>主要功能</h3><ul><li>长文档分析</li><li>代码编写</li><li>创意写作</li><li>学术研究辅助</li></ul>', 1, 0, 1, 0, 1, 1, 1, 2, 'Claude - Anthropic AI助手', 'Claude是Anthropic开发的安全可靠的AI助手，擅长长文本分析和深度对话'),

('Kimi', 'kimi', '/logos/kimi.png', 'https://kimi.moonshot.cn', '月之暗面开发，支持200万字超长上下文的AI助手', '<h2>Kimi介绍</h2><p>Kimi是月之暗面（Moonshot AI）推出的AI助手，最大特点是支持200万字超长上下文，适合处理长文档。</p><h3>主要功能</h3><ul><li>超长文档阅读</li><li>网页内容总结</li><li>文件分析</li><li>智能问答</li></ul>', 1, 1, 1, 0, 1, 1, 1, 3, 'Kimi - 月之暗面AI助手', 'Kimi是国产AI助手，支持200万字超长上下文，免费使用'),

('文心一言', 'wenxin-yiyan', '/logos/wenxin.png', 'https://yiyan.baidu.com', '百度开发的AI对话助手，基于文心大模型', '<h2>文心一言介绍</h2><p>文心一言是百度基于文心大模型开发的生成式AI产品，支持多轮对话、文本创作、代码生成等功能。</p><h3>主要功能</h3><ul><li>智能对话</li><li>文章写作</li><li>代码生成</li><li>图片生成</li><li>数据分析</li></ul>', 1, 1, 1, 0, 1, 1, 1, 4, '文心一言 - 百度AI对话助手', '文心一言是百度推出的AI对话助手，基于文心大模型，免费使用'),

('通义千问', 'tongyi-qianwen', '/logos/tongyi.png', 'https://tongyi.aliyun.com', '阿里云开发的AI大模型，支持对话、创作、编程等', '<h2>通义千问介绍</h2><p>通义千问是阿里云推出的大语言模型，具备多轮对话、文案创作、代码编写、逻辑推理等能力。</p><h3>主要功能</h3><ul><li>智能对话</li><li>文案创作</li><li>代码编写</li><li>文档分析</li></ul>', 1, 1, 1, 0, 1, 1, 1, 5, '通义千问 - 阿里云AI助手', '通义千问是阿里云推出的AI大模型，支持中文对话和内容创作'),

('讯飞星火', 'xinghuo', '/logos/xinghuo.png', 'https://xinghuo.xfyun.cn', '科大讯飞开发的认知大模型，中文理解能力强', '<h2>讯飞星火介绍</h2><p>讯飞星火是科大讯飞推出的认知大模型，在中文语言理解、知识问答方面表现出色。</p><h3>主要功能</h3><ul><li>智能对话</li><li>代码生成</li><li>文本创作</li><li>知识问答</li></ul>', 1, 1, 1, 0, 1, 1, 1, 6, '讯飞星火 - 科大讯飞AI大模型', '讯飞星火是科大讯飞推出的认知大模型，中文理解能力强'),

('豆包', 'doubao', '/logos/doubao.png', 'https://www.doubao.com', '字节跳动开发的AI对话助手，对话体验流畅', '<h2>豆包介绍</h2><p>豆包是字节跳动推出的AI对话助手，基于云雀大模型，提供智能对话、写作辅助、知识问答等服务。</p><h3>主要功能</h3><ul><li>智能聊天</li><li>写作助手</li><li>英语学习</li><li>知识问答</li></ul>', 1, 1, 1, 0, 0, 1, 1, 7, '豆包 - 字节跳动AI助手', '豆包是字节跳动推出的免费AI对话助手'),

('智谱清言', 'zhipu-qingyan', '/logos/zhipu.png', 'https://chatglm.cn', '智谱AI开发，基于GLM大模型的对话助手', '<h2>智谱清言介绍</h2><p>智谱清言是智谱AI基于GLM大模型打造的AI助手，支持多模态交互。</p><h3>主要功能</h3><ul><li>智能对话</li><li>文档分析</li><li>代码生成</li><li>图片理解</li></ul>', 1, 1, 1, 0, 1, 1, 1, 8, '智谱清言 - GLM大模型AI助手', '智谱清言是基于GLM大模型的AI对话助手'),

('DeepSeek', 'deepseek', '/logos/deepseek.png', 'https://chat.deepseek.com', '深度求索开发的AI助手，代码和数学能力强', '<h2>DeepSeek介绍</h2><p>DeepSeek是深度求索公司开发的AI助手，在代码生成和数学推理方面表现出色。</p><h3>主要功能</h3><ul><li>代码生成</li><li>数学推理</li><li>智能对话</li><li>文本创作</li></ul>', 1, 1, 1, 1, 1, 1, 1, 9, 'DeepSeek - 深度求索AI助手', 'DeepSeek是深度求索开发的AI助手，代码和数学能力强，开源可用'),

('腾讯混元', 'hunyuan', '/logos/hunyuan.png', 'https://hunyuan.tencent.com', '腾讯开发的大语言模型，支持对话和创作', '<h2>腾讯混元介绍</h2><p>腾讯混元是腾讯自研的大语言模型，具备强大的中文理解和生成能力。</p><h3>主要功能</h3><ul><li>智能对话</li><li>文案创作</li><li>代码编写</li><li>图片生成</li></ul>', 1, 1, 1, 0, 1, 0, 1, 10, '腾讯混元 - 腾讯AI大模型', '腾讯混元是腾讯自研的大语言模型产品');


INSERT INTO `tools` (`name`, `slug`, `logo`, `website`, `short_desc`, `content`, `category_id`, `is_free`, `is_chinese`, `is_open_source`, `has_api`, `is_recommend`, `status`, `sort`, `seo_title`, `seo_description`) VALUES

('Jasper', 'jasper', '/logos/jasper.png', 'https://www.jasper.ai', '专业的AI营销文案写作工具，支持多种内容模板', '<h2>Jasper介绍</h2><p>Jasper是一款专业的AI营销文案工具，提供70+写作模板，帮助创作博客、广告、邮件等内容。</p>', 2, 0, 0, 0, 1, 1, 1, 1, 'Jasper - AI营销文案写作工具', 'Jasper是专业的AI写作工具，帮助快速创作营销文案'),

('Copy.ai', 'copyai', '/logos/copyai.png', 'https://www.copy.ai', 'AI文案生成工具，快速生成营销文案和社交媒体内容', '<h2>Copy.ai介绍</h2><p>Copy.ai是一款AI驱动的文案生成工具，可以快速创作广告文案、社交媒体帖子、产品描述等。</p>', 2, 0, 0, 0, 1, 1, 1, 2, 'Copy.ai - AI文案生成器', 'Copy.ai帮助快速生成营销文案和社交媒体内容'),

('Notion AI', 'notion-ai', '/logos/notion.png', 'https://www.notion.so/product/ai', 'Notion内置AI助手，辅助写作、总结、翻译等', '<h2>Notion AI介绍</h2><p>Notion AI是Notion内置的AI写作助手，可以帮助用户写作、总结、翻译、头脑风暴等。</p>', 2, 0, 1, 0, 0, 1, 1, 3, 'Notion AI - 智能笔记写作助手', 'Notion AI是Notion内置的AI助手，提升写作效率'),

('秘塔写作猫', 'mita-writing', '/logos/mita.png', 'https://xiezuocat.com', '国产AI写作工具，支持论文降重、文章改写、语法纠错', '<h2>秘塔写作猫介绍</h2><p>秘塔写作猫是国内领先的AI写作平台，提供文章改写、降重、语法检查、AI续写等功能。</p>', 2, 0, 1, 0, 0, 1, 1, 4, '秘塔写作猫 - AI写作助手', '秘塔写作猫提供AI写作、改写、降重等功能'),

('火山写作', 'huoshan-writing', '/logos/huoshan.png', 'https://www.writingo.net', '字节跳动旗下AI写作工具，支持英语写作辅导', '<h2>火山写作介绍</h2><p>火山写作是字节跳动推出的AI英语写作工具，提供语法纠错、内容润色、写作建议等功能。</p>', 2, 1, 1, 0, 0, 1, 1, 5, '火山写作 - AI英语写作助手', '火山写作是字节跳动推出的免费AI英语写作工具'),

('Writesonic', 'writesonic', '/logos/writesonic.png', 'https://writesonic.com', 'AI内容创作平台，支持博客、广告、产品描述等', '<h2>Writesonic介绍</h2><p>Writesonic是一款AI内容创作工具，可以生成博客文章、广告文案、产品描述、落地页等。</p>', 2, 0, 1, 0, 1, 0, 1, 6, 'Writesonic - AI内容创作平台', 'Writesonic是AI内容创作工具，快速生成各类文案'),

('Grammarly', 'grammarly', '/logos/grammarly.png', 'https://www.grammarly.com', '英语语法检查和写作优化工具，AI驱动', '<h2>Grammarly介绍</h2><p>Grammarly是全球领先的英语写作辅助工具，提供语法检查、拼写纠错、风格建议、AI写作等功能。</p>', 2, 0, 0, 0, 1, 1, 1, 7, 'Grammarly - 英语语法检查工具', 'Grammarly是AI英语写作助手，提供语法检查和优化建议'),

('QuillBot', 'quillbot', '/logos/quillbot.png', 'https://quillbot.com', 'AI文本改写和润色工具，支持多种改写模式', '<h2>QuillBot介绍</h2><p>QuillBot是一款AI驱动的文本改写工具，提供多种改写模式，帮助优化文章表达。</p>', 2, 0, 0, 0, 1, 0, 1, 8, 'QuillBot - AI文本改写工具', 'QuillBot是AI改写工具，帮助优化和润色文章'),

('笔灵AI', 'biling-ai', '/logos/biling.png', 'https://ibiling.cn', '国产AI写作助手，支持论文、公文、文案等写作', '<h2>笔灵AI介绍</h2><p>笔灵AI是国产AI写作平台，支持多种场景的内容创作，包括论文、公文、营销文案等。</p>', 2, 0, 1, 0, 0, 0, 1, 9, '笔灵AI - 国产AI写作工具', '笔灵AI是国产AI写作助手，支持多场景内容创作'),

('Rytr', 'rytr', '/logos/rytr.png', 'https://rytr.me', 'AI写作助手，支持40+用例和30+语言', '<h2>Rytr介绍</h2><p>Rytr是一款经济实惠的AI写作工具，支持40多种用例模板和30多种语言。</p>', 2, 0, 1, 0, 1, 0, 1, 10, 'Rytr - AI写作助手', 'Rytr是高性价比的AI写作工具，支持多语言');


INSERT INTO `tools` (`name`, `slug`, `logo`, `website`, `short_desc`, `content`, `category_id`, `is_free`, `is_chinese`, `is_open_source`, `has_api`, `is_recommend`, `status`, `sort`, `seo_title`, `seo_description`) VALUES

('Midjourney', 'midjourney', '/logos/midjourney.png', 'https://www.midjourney.com', '最流行的AI绘画工具，生成高质量艺术图像', '<h2>Midjourney介绍</h2><p>Midjourney是目前最流行的AI绘画工具之一，通过Discord使用，能生成高质量的艺术风格图像。</p><h3>主要功能</h3><ul><li>文本生成图像</li><li>图像风格转换</li><li>图像变体生成</li><li>高分辨率放大</li></ul>', 3, 0, 1, 0, 0, 1, 1, 1, 'Midjourney - AI绘画工具', 'Midjourney是最流行的AI图像生成工具，生成高质量艺术图像'),

('DALL-E 3', 'dalle-3', '/logos/dalle.png', 'https://openai.com/dall-e-3', 'OpenAI推出的AI图像生成模型，精准理解文本描述', '<h2>DALL-E 3介绍</h2><p>DALL-E 3是OpenAI最新的图像生成模型，能精准理解文本描述，生成高质量图像。</p>', 3, 0, 1, 0, 1, 1, 1, 2, 'DALL-E 3 - OpenAI图像生成', 'DALL-E 3是OpenAI的AI图像生成模型'),

('Stable Diffusion', 'stable-diffusion', '/logos/sd.png', 'https://stability.ai', '开源AI图像生成模型，可本地部署', '<h2>Stable Diffusion介绍</h2><p>Stable Diffusion是Stability AI推出的开源图像生成模型，支持本地部署和自定义训练。</p>', 3, 1, 1, 1, 1, 1, 1, 3, 'Stable Diffusion - 开源AI绘画', 'Stable Diffusion是开源AI图像生成模型，可免费本地部署'),

('通义万相', 'tongyi-wanxiang', '/logos/wanxiang.png', 'https://tongyi.aliyun.com/wanxiang', '阿里云AI绘画工具，支持文生图和图像编辑', '<h2>通义万相介绍</h2><p>通义万相是阿里云推出的AI绘画工具，支持文本生成图像、图像编辑、风格转换等功能。</p>', 3, 1, 1, 0, 1, 1, 1, 4, '通义万相 - 阿里AI绘画工具', '通义万相是阿里云推出的免费AI绘画工具'),

('文心一格', 'wenxin-yige', '/logos/yige.png', 'https://yige.baidu.com', '百度AI绘画平台，中文理解能力强', '<h2>文心一格介绍</h2><p>文心一格是百度推出的AI绘画平台，对中文提示词理解出色，支持多种艺术风格。</p>', 3, 1, 1, 0, 1, 1, 1, 5, '文心一格 - 百度AI绘画', '文心一格是百度推出的AI绘画工具，中文理解强'),

('Leonardo.AI', 'leonardo-ai', '/logos/leonardo.png', 'https://leonardo.ai', '专业AI图像生成平台，提供精细控制', '<h2>Leonardo.AI介绍</h2><p>Leonardo.AI是专业的AI图像生成平台，提供模型训练、精细控制、多种风格等功能。</p>', 3, 0, 1, 0, 1, 1, 1, 6, 'Leonardo.AI - 专业AI绘画平台', 'Leonardo.AI是专业的AI图像生成平台'),

('Adobe Firefly', 'adobe-firefly', '/logos/firefly.png', 'https://www.adobe.com/products/firefly.html', 'Adobe推出的AI图像生成工具，商用安全', '<h2>Adobe Firefly介绍</h2><p>Adobe Firefly是Adobe推出的生成式AI工具，专注于商业安全的图像生成和编辑。</p>', 3, 0, 1, 0, 1, 1, 1, 7, 'Adobe Firefly - Adobe AI创意工具', 'Adobe Firefly是Adobe推出的商用安全AI图像生成工具'),

('Ideogram', 'ideogram', '/logos/ideogram.png', 'https://ideogram.ai', 'AI图像生成工具，擅长生成包含文字的图像', '<h2>Ideogram介绍</h2><p>Ideogram是一款AI图像生成工具，特色是能在图像中准确生成文字。</p>', 3, 0, 1, 0, 0, 0, 1, 8, 'Ideogram - AI文字图像生成', 'Ideogram擅长生成包含文字的AI图像'),

('即梦AI', 'jimeng-ai', '/logos/jimeng.png', 'https://jimeng.jianying.com', '字节跳动AI绘画工具，支持多种创作模式', '<h2>即梦AI介绍</h2><p>即梦AI是字节跳动旗下的AI绘画工具，提供文生图、图生图、AI写真等功能。</p>', 3, 1, 1, 0, 0, 1, 1, 9, '即梦AI - 字节AI绘画', '即梦AI是字节跳动推出的免费AI绘画工具'),

('Remove.bg', 'removebg', '/logos/removebg.png', 'https://www.remove.bg', 'AI智能抠图工具，一键去除图片背景', '<h2>Remove.bg介绍</h2><p>Remove.bg是一款AI智能抠图工具，能自动识别并去除图片背景，支持人像和物体。</p>', 3, 0, 1, 0, 1, 1, 1, 10, 'Remove.bg - AI智能抠图', 'Remove.bg是AI自动抠图工具，一键去除背景');

INSERT INTO `tools` (`name`, `slug`, `logo`, `website`, `short_desc`, `content`, `category_id`, `is_free`, `is_chinese`, `is_open_source`, `has_api`, `is_recommend`, `status`, `sort`, `seo_title`, `seo_description`) VALUES

('可灵AI', 'kling-ai', '/logos/kling.png', 'https://klingai.kuaishou.com', '快手推出的AI视频生成工具，国产领先', '<h2>可灵AI介绍</h2><p>可灵AI是快手推出的AI视频生成工具，支持文生视频、图生视频，效果达到国际领先水平。</p>', 4, 0, 1, 0, 1, 1, 1, 1, '可灵AI - 快手AI视频生成', '可灵AI是快手推出的领先AI视频生成工具'),

('Runway', 'runway', '/logos/runway.png', 'https://runwayml.com', '专业AI视频生成和编辑平台，Gen-2模型领先', '<h2>Runway介绍</h2><p>Runway是专业的AI视频创作平台，其Gen-2模型能生成高质量视频，支持多种编辑功能。</p>', 4, 0, 1, 0, 1, 1, 1, 2, 'Runway - AI视频生成平台', 'Runway是专业的AI视频生成和编辑平台'),

('Pika', 'pika', '/logos/pika.png', 'https://pika.art', 'AI视频生成工具，简单易用效果好', '<h2>Pika介绍</h2><p>Pika是一款简单易用的AI视频生成工具，支持文生视频和图生视频功能。</p>', 4, 0, 1, 0, 0, 1, 1, 3, 'Pika - AI视频生成', 'Pika是简单易用的AI视频生成工具'),

('HeyGen', 'heygen', '/logos/heygen.png', 'https://www.heygen.com', 'AI数字人视频生成平台，支持多语言口型同步', '<h2>HeyGen介绍</h2><p>HeyGen是AI数字人视频生成平台，可以创建数字人分身，支持多语言口型同步和视频翻译。</p>', 4, 0, 1, 0, 1, 1, 1, 4, 'HeyGen - AI数字人视频', 'HeyGen是AI数字人视频生成平台'),

('Synthesia', 'synthesia', '/logos/synthesia.png', 'https://www.synthesia.io', '企业级AI视频生成平台，专业数字人主播', '<h2>Synthesia介绍</h2><p>Synthesia是企业级AI视频生成平台，提供专业数字人主播，适合企业培训和营销视频。</p>', 4, 0, 0, 0, 1, 0, 1, 5, 'Synthesia - 企业AI视频平台', 'Synthesia是企业级AI数字人视频生成平台'),

('Luma AI', 'luma-ai', '/logos/luma.png', 'https://lumalabs.ai', 'AI 3D视频和场景生成工具', '<h2>Luma AI介绍</h2><p>Luma AI专注于AI 3D内容生成，可以从视频创建3D场景，支持Dream Machine视频生成。</p>', 4, 0, 1, 0, 1, 1, 1, 6, 'Luma AI - AI 3D视频生成', 'Luma AI是AI 3D内容和视频生成工具'),

('PixVerse', 'pixverse', '/logos/pixverse.png', 'https://pixverse.ai', '免费AI视频生成工具，效果出色', '<h2>PixVerse介绍</h2><p>PixVerse是一款免费的AI视频生成工具，支持文生视频和图生视频，效果出色。</p>', 4, 1, 1, 0, 0, 1, 1, 7, 'PixVerse - 免费AI视频生成', 'PixVerse是免费的AI视频生成工具'),

('剪映', 'jianying', '/logos/jianying.png', 'https://www.capcut.cn', '字节跳动视频剪辑工具，内置AI功能', '<h2>剪映介绍</h2><p>剪映是字节跳动推出的视频剪辑工具，提供AI字幕、智能抠像、AI特效等功能。</p>', 4, 1, 1, 0, 0, 1, 1, 8, '剪映 - AI视频剪辑', '剪映是字节跳动的视频剪辑工具，内置多种AI功能'),

('D-ID', 'd-id', '/logos/did.png', 'https://www.d-id.com', 'AI数字人视频生成，照片说话工具', '<h2>D-ID介绍</h2><p>D-ID是AI数字人视频生成平台，可以让照片中的人物说话，生成逼真的数字人视频。</p>', 4, 0, 1, 0, 1, 0, 1, 9, 'D-ID - AI照片说话', 'D-ID是AI数字人视频生成工具'),

('Vidu', 'vidu', '/logos/vidu.png', 'https://www.vidu.io', '国产AI视频生成工具，生数科技出品', '<h2>Vidu介绍</h2><p>Vidu是生数科技推出的AI视频生成工具，在视频一致性和质量方面表现出色。</p>', 4, 0, 1, 0, 1, 1, 1, 10, 'Vidu - 国产AI视频生成', 'Vidu是生数科技推出的AI视频生成工具');

INSERT INTO `tools` (`name`, `slug`, `logo`, `website`, `short_desc`, `content`, `category_id`, `is_free`, `is_chinese`, `is_open_source`, `has_api`, `is_recommend`, `status`, `sort`, `seo_title`, `seo_description`) VALUES

('ElevenLabs', 'elevenlabs', '/logos/elevenlabs.png', 'https://elevenlabs.io', '最先进的AI语音合成工具，声音克隆逼真', '<h2>ElevenLabs介绍</h2><p>ElevenLabs是领先的AI语音合成平台，提供极其逼真的语音生成和声音克隆功能。</p>', 5, 0, 1, 0, 1, 1, 1, 1, 'ElevenLabs - AI语音合成', 'ElevenLabs是最先进的AI语音合成工具'),

('Suno', 'suno', '/logos/suno.png', 'https://suno.com', 'AI音乐生成工具，文字生成歌曲', '<h2>Suno介绍</h2><p>Suno是革命性的AI音乐生成工具，可以通过文字描述生成完整的歌曲，包含人声和伴奏。</p>', 5, 0, 1, 0, 0, 1, 1, 2, 'Suno - AI音乐生成', 'Suno是AI音乐生成工具，文字生成歌曲'),

('Udio', 'udio', '/logos/udio.png', 'https://www.udio.com', 'AI音乐创作平台，高质量音乐生成', '<h2>Udio介绍</h2><p>Udio是AI音乐创作平台，能生成高质量的音乐作品，支持多种音乐风格。</p>', 5, 0, 1, 0, 0, 1, 1, 3, 'Udio - AI音乐创作', 'Udio是高质量AI音乐生成平台'),

('Murf AI', 'murf-ai', '/logos/murf.png', 'https://murf.ai', '专业AI配音工具，支持120+声音', '<h2>Murf AI介绍</h2><p>Murf AI是专业的AI配音平台，提供120多种逼真人声，适合视频配音和有声内容创作。</p>', 5, 0, 1, 0, 1, 1, 1, 4, 'Murf AI - AI配音工具', 'Murf AI是专业的AI配音和语音合成工具'),

('讯飞配音', 'xunfei-peiyin', '/logos/xunfei.png', 'https://peiyin.xunfei.cn', '科大讯飞AI配音平台，中文语音合成', '<h2>讯飞配音介绍</h2><p>讯飞配音是科大讯飞推出的AI配音平台，提供丰富的中文声音选择。</p>', 5, 0, 1, 0, 1, 1, 1, 5, '讯飞配音 - AI中文配音', '讯飞配音是科大讯飞的AI配音工具'),

('网易天音', 'tianyin', '/logos/tianyin.png', 'https://tianyin.163.com', '网易AI音乐创作平台，歌词和曲谱生成', '<h2>网易天音介绍</h2><p>网易天音是网易推出的AI音乐创作平台，支持歌词创作、曲谱生成、编曲等功能。</p>', 5, 1, 1, 0, 0, 0, 1, 6, '网易天音 - AI音乐创作', '网易天音是网易推出的AI音乐创作平台'),

('Descript', 'descript', '/logos/descript.png', 'https://www.descript.com', '音视频编辑工具，AI转录和编辑', '<h2>Descript介绍</h2><p>Descript是音视频编辑工具，提供AI语音转文字、文本编辑音频、声音克隆等功能。</p>', 5, 0, 1, 0, 1, 1, 1, 7, 'Descript - AI音视频编辑', 'Descript是AI驱动的音视频编辑工具'),

('Adobe Podcast', 'adobe-podcast', '/logos/adobepodcast.png', 'https://podcast.adobe.com', 'Adobe AI音频工具，语音增强和转录', '<h2>Adobe Podcast介绍</h2><p>Adobe Podcast是Adobe推出的AI音频工具，提供语音增强、降噪、转录等功能。</p>', 5, 1, 0, 0, 0, 0, 1, 8, 'Adobe Podcast - AI音频增强', 'Adobe Podcast是免费的AI音频增强工具'),

('Lovo.ai', 'lovo-ai', '/logos/lovo.png', 'https://lovo.ai', 'AI语音生成平台，500+声音选择', '<h2>Lovo.ai介绍</h2><p>Lovo.ai是AI语音生成平台，提供500多种语音选择，支持100多种语言。</p>', 5, 0, 1, 0, 1, 0, 1, 9, 'Lovo.ai - AI语音生成', 'Lovo.ai是多语言AI语音生成平台'),

('Resemble AI', 'resemble-ai', '/logos/resemble.png', 'https://www.resemble.ai', 'AI声音克隆和语音合成平台', '<h2>Resemble AI介绍</h2><p>Resemble AI是专业的AI声音克隆平台，可以克隆任何人的声音并生成语音。</p>', 5, 0, 0, 0, 1, 0, 1, 10, 'Resemble AI - AI声音克隆', 'Resemble AI是专业的AI声音克隆平台');

INSERT INTO `tools` (`name`, `slug`, `logo`, `website`, `short_desc`, `content`, `category_id`, `is_free`, `is_chinese`, `is_open_source`, `has_api`, `is_recommend`, `status`, `sort`, `seo_title`, `seo_description`) VALUES

('Microsoft Copilot', 'microsoft-copilot', '/logos/copilot.png', 'https://copilot.microsoft.com', '微软AI助手，集成Office全家桶', '<h2>Microsoft Copilot介绍</h2><p>Microsoft Copilot是微软推出的AI助手，深度集成Word、Excel、PowerPoint等Office应用。</p>', 6, 0, 1, 0, 1, 1, 1, 1, 'Microsoft Copilot - 微软AI助手', 'Microsoft Copilot是微软Office AI助手'),

('Gamma', 'gamma', '/logos/gamma.png', 'https://gamma.app', 'AI PPT生成工具，一键创建演示文稿', '<h2>Gamma介绍</h2><p>Gamma是AI演示文稿生成工具，输入主题即可自动生成精美的PPT和文档。</p>', 6, 0, 1, 0, 0, 1, 1, 2, 'Gamma - AI PPT生成', 'Gamma是AI PPT自动生成工具'),

('ChatPDF', 'chatpdf', '/logos/chatpdf.png', 'https://www.chatpdf.com', 'AI PDF阅读工具，与文档对话', '<h2>ChatPDF介绍</h2><p>ChatPDF是AI PDF分析工具，上传文档后可以通过对话方式提问和获取信息。</p>', 6, 0, 1, 0, 0, 1, 1, 3, 'ChatPDF - AI PDF阅读助手', 'ChatPDF是AI PDF文档分析工具'),

('WPS AI', 'wps-ai', '/logos/wpsai.png', 'https://ai.wps.cn', 'WPS内置AI助手，提升办公效率', '<h2>WPS AI介绍</h2><p>WPS AI是金山办公推出的AI助手，集成于WPS Office，提供写作、润色、翻译等功能。</p>', 6, 0, 1, 0, 0, 1, 1, 4, 'WPS AI - WPS智能办公', 'WPS AI是WPS Office内置的AI助手'),

('飞书智能伙伴', 'feishu-ai', '/logos/feishu.png', 'https://www.feishu.cn/product/ai', '飞书AI助手，企业协作效率工具', '<h2>飞书智能伙伴介绍</h2><p>飞书智能伙伴是飞书内置的AI助手，支持文档写作、会议总结、数据分析等功能。</p>', 6, 0, 1, 0, 0, 1, 1, 5, '飞书智能伙伴 - 飞书AI', '飞书智能伙伴是飞书内置的企业AI助手'),

('腾讯文档AI', 'tencent-docs-ai', '/logos/tencentdocs.png', 'https://docs.qq.com', '腾讯文档内置AI功能，智能写作和分析', '<h2>腾讯文档AI介绍</h2><p>腾讯文档AI是腾讯文档内置的AI功能，提供智能写作、内容总结、表格分析等。</p>', 6, 1, 1, 0, 0, 0, 1, 6, '腾讯文档AI - 智能文档', '腾讯文档AI提供智能写作和分析功能'),

('Beautiful.ai', 'beautiful-ai', '/logos/beautifulai.png', 'https://www.beautiful.ai', 'AI演示文稿设计工具，智能排版', '<h2>Beautiful.ai介绍</h2><p>Beautiful.ai是AI驱动的演示文稿设计工具，提供智能排版和设计建议。</p>', 6, 0, 0, 0, 0, 0, 1, 7, 'Beautiful.ai - AI PPT设计', 'Beautiful.ai是AI演示文稿设计工具'),

('Tome', 'tome', '/logos/tome.png', 'https://tome.app', 'AI叙事工具，创建互动演示文稿', '<h2>Tome介绍</h2><p>Tome是AI叙事和演示工具，可以快速创建包含图文视频的互动演示文稿。</p>', 6, 0, 1, 0, 0, 0, 1, 8, 'Tome - AI叙事演示', 'Tome是AI驱动的互动演示工具'),

('讯飞听见', 'iflyrec', '/logos/iflyrec.png', 'https://www.iflyrec.com', 'AI语音转文字工具，会议记录神器', '<h2>讯飞听见介绍</h2><p>讯飞听见是科大讯飞推出的AI语音转文字工具，支持会议录音、采访转录等场景。</p>', 6, 0, 1, 0, 1, 1, 1, 9, '讯飞听见 - AI语音转文字', '讯飞听见是专业的AI语音转文字工具'),

('AiPPT', 'aippt', '/logos/aippt.png', 'https://www.aippt.cn', '国产AI PPT生成工具，中文支持好', '<h2>AiPPT介绍</h2><p>AiPPT是国产AI PPT生成工具，输入主题自动生成PPT，中文支持好。</p>', 6, 0, 1, 0, 0, 1, 1, 10, 'AiPPT - AI PPT生成', 'AiPPT是国产AI PPT自动生成工具');

INSERT INTO `tools` (`name`, `slug`, `logo`, `website`, `short_desc`, `content`, `category_id`, `is_free`, `is_chinese`, `is_open_source`, `has_api`, `is_recommend`, `status`, `sort`, `seo_title`, `seo_description`) VALUES

('GitHub Copilot', 'github-copilot', '/logos/githubcopilot.png', 'https://github.com/features/copilot', 'GitHub AI编程助手，代码自动补全和生成', '<h2>GitHub Copilot介绍</h2><p>GitHub Copilot是GitHub和OpenAI合作开发的AI编程助手，提供智能代码补全和生成功能。</p>', 7, 0, 1, 0, 0, 1, 1, 1, 'GitHub Copilot - AI编程助手', 'GitHub Copilot是领先的AI代码生成工具'),

('Cursor', 'cursor', '/logos/cursor.png', 'https://cursor.sh', 'AI代码编辑器，集成GPT-4的编程IDE', '<h2>Cursor介绍</h2><p>Cursor是AI原生代码编辑器，深度集成AI能力，支持代码生成、解释、重构等功能。</p>', 7, 0, 1, 0, 0, 1, 1, 2, 'Cursor - AI代码编辑器', 'Cursor是AI原生的代码编辑器'),

('通义灵码', 'tongyi-lingma', '/logos/lingma.png', 'https://tongyi.aliyun.com/lingma', '阿里云AI编程助手，支持多种IDE', '<h2>通义灵码介绍</h2><p>通义灵码是阿里云推出的AI编程助手，支持VSCode、JetBrains等主流IDE。</p>', 7, 1, 1, 0, 0, 1, 1, 3, '通义灵码 - 阿里AI编程', '通义灵码是阿里云免费AI编程助手'),

('Codeium', 'codeium', '/logos/codeium.png', 'https://codeium.com', '免费AI代码补全工具，支持70+语言', '<h2>Codeium介绍</h2><p>Codeium是免费的AI代码补全工具，支持70多种编程语言和40多种IDE。</p>', 7, 1, 1, 0, 1, 1, 1, 4, 'Codeium - 免费AI代码补全', 'Codeium是免费的AI代码补全工具'),

('Tabnine', 'tabnine', '/logos/tabnine.png', 'https://www.tabnine.com', 'AI代码补全工具，支持本地部署', '<h2>Tabnine介绍</h2><p>Tabnine是老牌AI代码补全工具，支持本地部署，保护代码隐私。</p>', 7, 0, 1, 0, 1, 0, 1, 5, 'Tabnine - AI代码补全', 'Tabnine是支持本地部署的AI代码补全工具'),

('Amazon CodeWhisperer', 'codewhisperer', '/logos/codewhisperer.png', 'https://aws.amazon.com/codewhisperer', '亚马逊AI编程助手，AWS深度集成', '<h2>Amazon CodeWhisperer介绍</h2><p>CodeWhisperer是亚马逊推出的AI编程助手，与AWS服务深度集成。</p>', 7, 1, 1, 0, 0, 0, 1, 6, 'CodeWhisperer - 亚马逊AI编程', 'CodeWhisperer是亚马逊的AI编程助手'),

('MarsCode', 'marscode', '/logos/marscode.png', 'https://www.marscode.cn', '字节跳动AI编程助手，云端IDE', '<h2>MarsCode介绍</h2><p>MarsCode是字节跳动推出的AI编程平台，提供云端IDE和AI编程助手功能。</p>', 7, 1, 1, 0, 0, 1, 1, 7, 'MarsCode - 字节AI编程', 'MarsCode是字节跳动的免费AI编程平台'),

('Replit AI', 'replit-ai', '/logos/replit.png', 'https://replit.com', '在线IDE，集成AI编程能力', '<h2>Replit AI介绍</h2><p>Replit是在线编程平台，集成AI代码生成和解释功能，支持多种语言。</p>', 7, 0, 1, 0, 0, 1, 1, 8, 'Replit AI - 在线AI编程', 'Replit是集成AI的在线编程平台'),

('文心快码', 'comate', '/logos/comate.png', 'https://comate.baidu.com', '百度AI编程助手，代码生成和补全', '<h2>文心快码介绍</h2><p>文心快码是百度推出的AI编程助手，提供代码生成、补全、解释等功能。</p>', 7, 1, 1, 0, 0, 0, 1, 9, '文心快码 - 百度AI编程', '文心快码是百度的免费AI编程助手'),

('Phind', 'phind', '/logos/phind.png', 'https://www.phind.com', '面向开发者的AI搜索引擎和编程助手', '<h2>Phind介绍</h2><p>Phind是专为开发者设计的AI搜索引擎，能理解技术问题并提供代码解决方案。</p>', 7, 1, 1, 0, 0, 1, 1, 10, 'Phind - 开发者AI搜索', 'Phind是面向开发者的AI搜索和编程助手');

INSERT INTO `tools` (`name`, `slug`, `logo`, `website`, `short_desc`, `content`, `category_id`, `is_free`, `is_chinese`, `is_open_source`, `has_api`, `is_recommend`, `status`, `sort`, `seo_title`, `seo_description`) VALUES

('Canva AI', 'canva-ai', '/logos/canva.png', 'https://www.canva.com', '在线设计平台，内置AI设计功能', '<h2>Canva AI介绍</h2><p>Canva是流行的在线设计平台，集成AI图像生成、AI写作、魔法橡皮擦等功能。</p>', 8, 0, 1, 0, 0, 1, 1, 1, 'Canva AI - 在线AI设计', 'Canva是内置AI功能的在线设计平台'),

('即时设计', 'js-design', '/logos/jsdesign.png', 'https://js.design', '国产在线设计工具，集成AI设计功能', '<h2>即时设计介绍</h2><p>即时设计是国产在线UI设计工具，提供AI设计、AI生图、智能排版等功能。</p>', 8, 1, 1, 0, 0, 1, 1, 2, '即时设计 - 国产AI设计工具', '即时设计是国产在线UI设计工具'),

('Figma AI', 'figma-ai', '/logos/figma.png', 'https://www.figma.com', '专业UI设计工具，新增AI功能', '<h2>Figma AI介绍</h2><p>Figma是专业的UI设计工具，最新版本集成了AI设计功能，提升设计效率。</p>', 8, 0, 1, 0, 1, 1, 1, 3, 'Figma AI - 专业UI设计', 'Figma是专业的UI设计工具，支持AI功能'),

('Galileo AI', 'galileo-ai', '/logos/galileo.png', 'https://www.usegalileo.ai', 'AI UI设计生成工具，文本生成界面', '<h2>Galileo AI介绍</h2><p>Galileo AI可以通过文本描述自动生成UI设计稿，大幅提升设计效率。</p>', 8, 0, 1, 0, 0, 1, 1, 4, 'Galileo AI - AI UI生成', 'Galileo AI是AI UI设计生成工具'),

('Uizard', 'uizard', '/logos/uizard.png', 'https://uizard.io', 'AI UI/UX设计工具，快速原型设计', '<h2>Uizard介绍</h2><p>Uizard是AI驱动的UI设计工具，支持手绘稿转换、文本生成界面等功能。</p>', 8, 0, 1, 0, 0, 0, 1, 5, 'Uizard - AI原型设计', 'Uizard是AI驱动的快速原型设计工具'),

('Looka', 'looka', '/logos/looka.png', 'https://looka.com', 'AI Logo设计工具，品牌视觉生成', '<h2>Looka介绍</h2><p>Looka是AI Logo设计工具，可以根据品牌信息自动生成Logo和品牌视觉方案。</p>', 8, 0, 1, 0, 0, 1, 1, 6, 'Looka - AI Logo设计', 'Looka是AI Logo和品牌设计工具'),

('Framer AI', 'framer-ai', '/logos/framer.png', 'https://www.framer.com', 'AI网站建设工具，无代码建站', '<h2>Framer AI介绍</h2><p>Framer是AI驱动的网站建设工具，可以通过文本描述生成网站页面。</p>', 8, 0, 1, 0, 0, 1, 1, 7, 'Framer AI - AI网站建设', 'Framer是AI驱动的无代码网站建设工具'),

('Khroma', 'khroma', '/logos/khroma.png', 'https://www.khroma.co', 'AI配色工具，学习你的颜色偏好', '<h2>Khroma介绍</h2><p>Khroma是AI配色工具，通过学习你的颜色偏好，生成无限的配色方案。</p>', 8, 1, 0, 0, 0, 0, 1, 8, 'Khroma - AI配色工具', 'Khroma是AI驱动的配色方案生成工具'),

('Designs.ai', 'designs-ai', '/logos/designsai.png', 'https://designs.ai', 'AI设计套件，Logo/视频/文案一站式', '<h2>Designs.ai介绍</h2><p>Designs.ai是综合AI设计平台，提供Logo、视频、文案、语音等多种设计工具。</p>', 8, 0, 1, 0, 1, 0, 1, 9, 'Designs.ai - AI设计套件', 'Designs.ai是一站式AI设计平台'),

('Pixso AI', 'pixso-ai', '/logos/pixso.png', 'https://pixso.cn', '国产协同设计工具，集成AI功能', '<h2>Pixso AI介绍</h2><p>Pixso是国产协同设计工具，提供AI设计、AI生图、智能排版等功能。</p>', 8, 1, 1, 0, 0, 0, 1, 10, 'Pixso AI - 国产协同设计', 'Pixso是集成AI功能的国产协同设计工具');

INSERT INTO `tools` (`name`, `slug`, `logo`, `website`, `short_desc`, `content`, `category_id`, `is_free`, `is_chinese`, `is_open_source`, `has_api`, `is_recommend`, `status`, `sort`, `seo_title`, `seo_description`) VALUES

('扣子(Coze)', 'coze', '/logos/coze.png', 'https://www.coze.cn', '字节跳动AI智能体平台，无代码创建AI Bot', '<h2>扣子(Coze)介绍</h2><p>扣子是字节跳动推出的AI智能体开发平台，无需编程即可创建功能强大的AI Bot。</p>', 9, 1, 1, 0, 1, 1, 1, 1, '扣子Coze - AI智能体平台', '扣子是字节跳动的AI智能体开发平台'),

('Dify', 'dify', '/logos/dify.png', 'https://dify.ai', '开源LLM应用开发平台，快速构建AI应用', '<h2>Dify介绍</h2><p>Dify是开源的LLM应用开发平台，提供可视化编排、Agent、RAG等功能。</p>', 9, 1, 1, 1, 1, 1, 1, 2, 'Dify - 开源AI应用平台', 'Dify是开源的LLM应用开发平台'),

('AutoGPT', 'autogpt', '/logos/autogpt.png', 'https://agpt.co', '自主AI代理，自动完成复杂任务', '<h2>AutoGPT介绍</h2><p>AutoGPT是开源的自主AI代理项目，可以自动分解任务并完成复杂目标。</p>', 9, 1, 1, 1, 0, 1, 1, 3, 'AutoGPT - 自主AI代理', 'AutoGPT是开源的自主AI代理'),

('百度文心智能体', 'wenxin-agent', '/logos/wenxinagent.png', 'https://agents.baidu.com', '百度AI智能体平台，创建专属AI助手', '<h2>百度文心智能体介绍</h2><p>百度文心智能体是百度推出的AI智能体创建平台，可以定制专属AI助手。</p>', 9, 1, 1, 0, 1, 1, 1, 4, '文心智能体 - 百度AI Agent', '百度文心智能体是AI智能体创建平台'),

('GPTs', 'gpts', '/logos/gpts.png', 'https://chat.openai.com/gpts', 'OpenAI GPT商店，创建和使用自定义GPT', '<h2>GPTs介绍</h2><p>GPTs是OpenAI推出的自定义GPT平台，用户可以创建和分享专属AI助手。</p>', 9, 0, 1, 0, 1, 1, 1, 5, 'GPTs - OpenAI GPT商店', 'GPTs是OpenAI的自定义GPT平台'),

('AgentGPT', 'agentgpt', '/logos/agentgpt.png', 'https://agentgpt.reworkd.ai', '浏览器端自主AI代理，可视化任务执行', '<h2>AgentGPT介绍</h2><p>AgentGPT是浏览器端运行的自主AI代理，可以可视化执行复杂任务。</p>', 9, 1, 1, 1, 0, 0, 1, 6, 'AgentGPT - 浏览器AI代理', 'AgentGPT是浏览器端的自主AI代理'),

('FastGPT', 'fastgpt', '/logos/fastgpt.png', 'https://fastgpt.in', '开源AI知识库问答系统，支持私有部署', '<h2>FastGPT介绍</h2><p>FastGPT是开源的AI知识库问答系统，支持知识库构建和智能问答。</p>', 9, 1, 1, 1, 1, 1, 1, 7, 'FastGPT - AI知识库系统', 'FastGPT是开源的AI知识库问答系统'),

('字节智能体平台', 'volcengine-agent', '/logos/volcagent.png', 'https://www.volcengine.com/product/ai-agent', '火山引擎AI Agent平台，企业级智能体', '<h2>字节智能体平台介绍</h2><p>字节智能体平台是火山引擎推出的企业级AI Agent开发平台。</p>', 9, 0, 1, 0, 1, 0, 1, 8, '字节智能体平台 - 企业AI Agent', '字节智能体平台是企业级AI Agent开发平台'),

('MetaGPT', 'metagpt', '/logos/metagpt.png', 'https://github.com/geekan/MetaGPT', '多智能体框架，AI软件公司模拟', '<h2>MetaGPT介绍</h2><p>MetaGPT是开源的多智能体框架，模拟软件公司运作，自动完成软件开发任务。</p>', 9, 1, 1, 1, 0, 1, 1, 9, 'MetaGPT - 多智能体框架', 'MetaGPT是开源的多智能体软件开发框架'),

('CrewAI', 'crewai', '/logos/crewai.png', 'https://www.crewai.com', '多智能体协作框架，构建AI团队', '<h2>CrewAI介绍</h2><p>CrewAI是用于构建多智能体协作系统的框架，可以创建AI团队完成复杂任务。</p>', 9, 1, 1, 1, 0, 0, 1, 10, 'CrewAI - 多智能体协作', 'CrewAI是多智能体协作框架');


INSERT INTO `tools` (`name`, `slug`, `logo`, `website`, `short_desc`, `content`, `category_id`, `is_free`, `is_chinese`, `is_open_source`, `has_api`, `is_recommend`, `status`, `sort`, `seo_title`, `seo_description`) VALUES

('Perplexity', 'perplexity', '/logos/perplexity.png', 'https://www.perplexity.ai', '最流行的AI搜索引擎，实时联网搜索答案', '<h2>Perplexity介绍</h2><p>Perplexity是领先的AI搜索引擎，结合大语言模型和实时网络搜索，提供精准答案和来源。</p>', 10, 0, 1, 0, 1, 1, 1, 1, 'Perplexity - AI搜索引擎', 'Perplexity是最流行的AI搜索引擎'),

('秘塔AI搜索', 'metaso', '/logos/metaso.png', 'https://metaso.cn', '国产AI搜索引擎，无广告直达答案', '<h2>秘塔AI搜索介绍</h2><p>秘塔AI搜索是国产AI搜索引擎，直接给出答案而非链接列表，无广告干扰。</p>', 10, 1, 1, 0, 0, 1, 1, 2, '秘塔AI搜索 - 国产AI搜索', '秘塔AI搜索是国产AI搜索引擎'),

('天工AI搜索', 'tiangong', '/logos/tiangong.png', 'https://search.tiangong.cn', '昆仑万维AI搜索，智能问答引擎', '<h2>天工AI搜索介绍</h2><p>天工AI搜索是昆仑万维推出的AI搜索引擎，提供智能问答和信息聚合。</p>', 10, 1, 1, 0, 0, 1, 1, 3, '天工AI搜索 - 智能搜索', '天工AI搜索是昆仑万维的AI搜索引擎'),

('You.com', 'you-com', '/logos/you.png', 'https://you.com', 'AI搜索引擎，支持代码、图像等多模态搜索', '<h2>You.com介绍</h2><p>You.com是AI驱动的搜索引擎，支持网页、图像、代码、AI聊天等多种搜索模式。</p>', 10, 0, 1, 0, 1, 0, 1, 4, 'You.com - 多模态AI搜索', 'You.com是支持多模态的AI搜索引擎'),

('Bing AI', 'bing-ai', '/logos/bing.png', 'https://www.bing.com/chat', '微软必应AI搜索，集成GPT-4', '<h2>Bing AI介绍</h2><p>Bing AI是微软必应集成的AI搜索功能，基于GPT-4提供智能搜索和对话。</p>', 10, 1, 1, 0, 0, 1, 1, 5, 'Bing AI - 必应AI搜索', 'Bing AI是微软必应的AI搜索功能'),

('Devv.ai', 'devv-ai', '/logos/devv.png', 'https://devv.ai', '面向开发者的AI搜索引擎', '<h2>Devv.ai介绍</h2><p>Devv.ai是专为开发者设计的AI搜索引擎，专注于技术问题和代码搜索。</p>', 10, 1, 1, 0, 0, 1, 1, 6, 'Devv.ai - 开发者AI搜索', 'Devv.ai是面向开发者的AI搜索引擎'),

('Phind', 'phind-search', '/logos/phind.png', 'https://www.phind.com', '程序员AI搜索，代码问题专家', '<h2>Phind介绍</h2><p>Phind是面向程序员的AI搜索引擎，擅长回答技术问题和提供代码解决方案。</p>', 10, 1, 1, 0, 0, 1, 1, 7, 'Phind - 程序员AI搜索', 'Phind是程序员的AI搜索引擎'),

('360AI搜索', '360-ai-search', '/logos/360ai.png', 'https://www.sou.com', '360推出的AI搜索引擎', '<h2>360AI搜索介绍</h2><p>360AI搜索是360公司推出的AI搜索引擎，提供智能问答和搜索服务。</p>', 10, 1, 1, 0, 0, 0, 1, 8, '360AI搜索 - 智能搜索', '360AI搜索是360的AI搜索引擎'),

('Kimi搜索', 'kimi-search', '/logos/kimi.png', 'https://kimi.moonshot.cn', 'Kimi内置的联网搜索功能', '<h2>Kimi搜索介绍</h2><p>Kimi支持联网搜索功能，可以实时获取网络信息并总结回答。</p>', 10, 1, 1, 0, 0, 0, 1, 9, 'Kimi搜索 - 联网AI搜索', 'Kimi内置联网搜索功能'),

('Exa', 'exa', '/logos/exa.png', 'https://exa.ai', '语义搜索引擎，为AI应用提供搜索API', '<h2>Exa介绍</h2><p>Exa是语义搜索引擎，专为AI应用提供高质量的搜索API服务。</p>', 10, 0, 0, 0, 1, 0, 1, 10, 'Exa - 语义搜索API', 'Exa是为AI应用提供的语义搜索API');

INSERT INTO `tools` (`name`, `slug`, `logo`, `website`, `short_desc`, `content`, `category_id`, `is_free`, `is_chinese`, `is_open_source`, `has_api`, `is_recommend`, `status`, `sort`, `seo_title`, `seo_description`) VALUES

('OpenAI API', 'openai-api', '/logos/openai.png', 'https://platform.openai.com', 'OpenAI官方API平台，GPT-4/DALL-E等模型', '<h2>OpenAI API介绍</h2><p>OpenAI API是OpenAI官方的开发者平台，提供GPT-4、DALL-E、Whisper等模型的API访问。</p>', 11, 0, 1, 0, 1, 1, 1, 1, 'OpenAI API - OpenAI开发平台', 'OpenAI API是OpenAI官方的API开发平台'),

('Hugging Face', 'hugging-face', '/logos/huggingface.png', 'https://huggingface.co', 'AI模型社区，开源模型托管和分享', '<h2>Hugging Face介绍</h2><p>Hugging Face是最大的AI模型社区，提供模型托管、数据集、Spaces等服务。</p>', 11, 1, 1, 1, 1, 1, 1, 2, 'Hugging Face - AI模型社区', 'Hugging Face是最大的AI模型开源社区'),

('阿里云灵积', 'dashscope', '/logos/dashscope.png', 'https://dashscope.aliyun.com', '阿里云模型服务平台，通义系列API', '<h2>阿里云灵积介绍</h2><p>阿里云灵积是阿里云的模型服务平台，提供通义千问、通义万相等模型的API。</p>', 11, 0, 1, 0, 1, 1, 1, 3, '阿里云灵积 - 阿里云AI API', '阿里云灵积提供通义系列模型API'),

('百度智能云千帆', 'qianfan', '/logos/qianfan.png', 'https://cloud.baidu.com/product/wenxinworkshop', '百度大模型平台，文心系列API', '<h2>百度千帆介绍</h2><p>百度千帆是百度智能云的大模型平台，提供文心大模型的API和开发工具。</p>', 11, 0, 1, 0, 1, 1, 1, 4, '百度千帆 - 百度大模型平台', '百度千帆是百度智能云的大模型开发平台'),

('火山引擎', 'volcengine', '/logos/volcengine.png', 'https://www.volcengine.com/product/doubao', '字节跳动云服务，豆包大模型API', '<h2>火山引擎介绍</h2><p>火山引擎是字节跳动的云服务平台，提供豆包大模型等AI服务。</p>', 11, 0, 1, 0, 1, 1, 1, 5, '火山引擎 - 字节云服务', '火山引擎提供豆包大模型API'),

('Azure OpenAI', 'azure-openai', '/logos/azure.png', 'https://azure.microsoft.com/en-us/products/ai-services/openai-service', '微软Azure的OpenAI服务，企业级部署', '<h2>Azure OpenAI介绍</h2><p>Azure OpenAI是微软在Azure云上提供的OpenAI服务，适合企业级应用。</p>', 11, 0, 1, 0, 1, 1, 1, 6, 'Azure OpenAI - 微软企业AI', 'Azure OpenAI是微软的企业级OpenAI服务'),

('Google Vertex AI', 'vertex-ai', '/logos/vertexai.png', 'https://cloud.google.com/vertex-ai', 'Google云AI平台，Gemini模型API', '<h2>Vertex AI介绍</h2><p>Vertex AI是Google Cloud的AI开发平台，提供Gemini等模型的API和MLOps工具。</p>', 11, 0, 1, 0, 1, 0, 1, 7, 'Vertex AI - Google云AI', 'Vertex AI是Google Cloud的AI开发平台'),

('Replicate', 'replicate', '/logos/replicate.png', 'https://replicate.com', '云端AI模型运行平台，一键部署开源模型', '<h2>Replicate介绍</h2><p>Replicate是云端AI模型运行平台，可以一键运行各种开源AI模型。</p>', 11, 0, 1, 0, 1, 1, 1, 8, 'Replicate - 云端AI模型运行', 'Replicate是云端运行AI模型的平台'),

('硅基流动', 'siliconflow', '/logos/siliconflow.png', 'https://siliconflow.cn', '国产AI云平台，多模型API聚合', '<h2>硅基流动介绍</h2><p>硅基流动是国产AI云平台，提供多种开源和商业大模型的API服务。</p>', 11, 0, 1, 0, 1, 1, 1, 9, '硅基流动 - 国产AI云', '硅基流动是国产多模型API聚合平台'),

('腾讯云AI', 'tencent-cloud-ai', '/logos/tencentcloud.png', 'https://cloud.tencent.com/product/hunyuan', '腾讯云AI服务，混元大模型API', '<h2>腾讯云AI介绍</h2><p>腾讯云提供混元大模型等AI服务的API，支持企业级应用开发。</p>', 11, 0, 1, 0, 1, 0, 1, 10, '腾讯云AI - 腾讯云大模型', '腾讯云提供混元大模型API');

INSERT INTO `tools` (`name`, `slug`, `logo`, `website`, `short_desc`, `content`, `category_id`, `is_free`, `is_chinese`, `is_open_source`, `has_api`, `is_recommend`, `status`, `sort`, `seo_title`, `seo_description`) VALUES

('Hugging Face Hub', 'hf-hub', '/logos/huggingface.png', 'https://huggingface.co/models', '最大的开源模型库，海量预训练模型', '<h2>Hugging Face Hub介绍</h2><p>Hugging Face Hub是最大的AI模型仓库，托管数十万个开源模型。</p>', 12, 1, 1, 1, 1, 1, 1, 1, 'Hugging Face Hub - 模型库', 'Hugging Face Hub是最大的开源AI模型库'),

('ModelScope', 'modelscope', '/logos/modelscope.png', 'https://www.modelscope.cn', '阿里达摩院开源模型社区', '<h2>ModelScope介绍</h2><p>ModelScope是阿里达摩院推出的开源模型社区，提供大量中文AI模型。</p>', 12, 1, 1, 1, 1, 1, 1, 2, 'ModelScope - 魔搭社区', 'ModelScope是阿里达摩院的开源模型社区'),

('Google Colab', 'google-colab', '/logos/colab.png', 'https://colab.research.google.com', '免费云端GPU环境，Jupyter笔记本', '<h2>Google Colab介绍</h2><p>Google Colab是免费的云端Jupyter环境，提供GPU/TPU资源用于AI模型训练。</p>', 12, 1, 1, 0, 0, 1, 1, 3, 'Google Colab - 免费GPU', 'Google Colab提供免费GPU进行AI模型训练'),

('Kaggle', 'kaggle', '/logos/kaggle.png', 'https://www.kaggle.com', '数据科学竞赛平台，免费GPU和数据集', '<h2>Kaggle介绍</h2><p>Kaggle是全球最大的数据科学竞赛平台，提供免费GPU和丰富的数据集。</p>', 12, 1, 1, 0, 1, 1, 1, 4, 'Kaggle - 数据科学平台', 'Kaggle是数据科学竞赛和学习平台'),

('Weights & Biases', 'wandb', '/logos/wandb.png', 'https://wandb.ai', 'ML实验追踪和可视化平台', '<h2>Weights & Biases介绍</h2><p>Weights & Biases是机器学习实验追踪平台，提供实验管理、可视化、协作等功能。</p>', 12, 0, 1, 0, 1, 1, 1, 5, 'Weights & Biases - ML实验管理', 'Weights & Biases是ML实验追踪和管理平台'),

('LangChain', 'langchain', '/logos/langchain.png', 'https://www.langchain.com', 'LLM应用开发框架，链式调用大模型', '<h2>LangChain介绍</h2><p>LangChain是用于构建LLM应用的开发框架，支持链式调用、Agent、RAG等功能。</p>', 12, 1, 1, 1, 0, 1, 1, 6, 'LangChain - LLM开发框架', 'LangChain是LLM应用开发框架'),

('LlamaIndex', 'llamaindex', '/logos/llamaindex.png', 'https://www.llamaindex.ai', 'LLM数据框架，知识库构建', '<h2>LlamaIndex介绍</h2><p>LlamaIndex是用于构建LLM数据层的框架，专注于知识库和RAG应用。</p>', 12, 1, 1, 1, 0, 1, 1, 7, 'LlamaIndex - LLM数据框架', 'LlamaIndex是LLM知识库构建框架'),

('OpenMMLab', 'openmmlab', '/logos/openmmlab.png', 'https://openmmlab.com', '商汤开源的计算机视觉算法库', '<h2>OpenMMLab介绍</h2><p>OpenMMLab是商汤科技开源的计算机视觉算法平台，提供丰富的CV模型和工具。</p>', 12, 1, 1, 1, 0, 0, 1, 8, 'OpenMMLab - CV算法库', 'OpenMMLab是开源的计算机视觉算法平台'),

('Ollama', 'ollama', '/logos/ollama.png', 'https://ollama.com', '本地运行大模型工具，一键部署开源LLM', '<h2>Ollama介绍</h2><p>Ollama是本地运行大语言模型的工具，支持一键下载和运行各种开源LLM。</p>', 12, 1, 1, 1, 1, 1, 1, 9, 'Ollama - 本地运行LLM', 'Ollama是本地运行大语言模型的工具'),

('vLLM', 'vllm', '/logos/vllm.png', 'https://docs.vllm.ai', '高性能LLM推理引擎，开源部署方案', '<h2>vLLM介绍</h2><p>vLLM是高性能的LLM推理和服务引擎，显著提升模型推理速度。</p>', 12, 1, 1, 1, 0, 1, 1, 10, 'vLLM - LLM推理引擎', 'vLLM是高性能LLM推理引擎');

INSERT INTO `tools` (`name`, `slug`, `logo`, `website`, `short_desc`, `content`, `category_id`, `is_free`, `is_chinese`, `is_open_source`, `has_api`, `is_recommend`, `status`, `sort`, `seo_title`, `seo_description`) VALUES

('DeepLearning.AI', 'deeplearningai', '/logos/deeplearningai.png', 'https://www.deeplearning.ai', '吴恩达创办的AI学习平台，专业课程', '<h2>DeepLearning.AI介绍</h2><p>DeepLearning.AI是吴恩达创办的AI教育平台，提供深度学习、机器学习等专业课程。</p>', 13, 0, 1, 0, 0, 1, 1, 1, 'DeepLearning.AI - 吴恩达AI课程', 'DeepLearning.AI是吴恩达创办的AI学习平台'),

('Fast.ai', 'fastai', '/logos/fastai.png', 'https://www.fast.ai', '实践导向的深度学习课程，免费开放', '<h2>Fast.ai介绍</h2><p>Fast.ai提供免费的深度学习实践课程，强调从应用入手学习AI。</p>', 13, 1, 0, 1, 0, 1, 1, 2, 'Fast.ai - 免费深度学习', 'Fast.ai提供免费的深度学习实践课程'),

('Coursera', 'coursera', '/logos/coursera.png', 'https://www.coursera.org', '全球在线教育平台，名校AI课程', '<h2>Coursera介绍</h2><p>Coursera是全球领先的在线教育平台，提供斯坦福、谷歌等机构的AI课程。</p>', 13, 0, 1, 0, 0, 1, 1, 3, 'Coursera - 在线AI课程', 'Coursera提供名校和大厂的AI课程'),

('Hugging Face Learn', 'hf-learn', '/logos/huggingface.png', 'https://huggingface.co/learn', 'Hugging Face官方教程，NLP和LLM学习', '<h2>Hugging Face Learn介绍</h2><p>Hugging Face Learn提供免费的NLP、Transformers、扩散模型等教程。</p>', 13, 1, 1, 1, 0, 1, 1, 4, 'Hugging Face Learn - HF官方教程', 'Hugging Face Learn提供免费AI教程'),

('Kaggle Learn', 'kaggle-learn', '/logos/kaggle.png', 'https://www.kaggle.com/learn', 'Kaggle免费AI课程，实践项目导向', '<h2>Kaggle Learn介绍</h2><p>Kaggle Learn提供免费的数据科学和机器学习微课程，配合实践项目。</p>', 13, 1, 1, 0, 0, 1, 1, 5, 'Kaggle Learn - 免费数据科学课程', 'Kaggle Learn提供免费的机器学习课程'),

('机器之心', 'jiqizhixin', '/logos/jiqizhixin.png', 'https://www.jiqizhixin.com', '国内权威AI媒体，技术资讯和分析', '<h2>机器之心介绍</h2><p>机器之心是国内领先的AI媒体，提供前沿技术资讯、论文解读、行业分析等内容。</p>', 13, 1, 1, 0, 0, 1, 1, 6, '机器之心 - AI技术媒体', '机器之心是国内权威AI技术媒体'),

('PaperWithCode', 'paperswithcode', '/logos/paperswithcode.png', 'https://paperswithcode.com', 'AI论文与代码对应平台，最新研究追踪', '<h2>Papers With Code介绍</h2><p>Papers With Code将机器学习论文与开源代码对应，方便追踪和复现最新研究。</p>', 13, 1, 0, 0, 0, 1, 1, 7, 'Papers With Code - 论文代码', 'Papers With Code是AI论文和代码对应平台'),

('AI研习社', 'yanxishe', '/logos/yanxishe.png', 'https://www.yanxishe.com', '国内AI学习社区，课程和竞赛', '<h2>AI研习社介绍</h2><p>AI研习社是雷锋网旗下的AI学习社区，提供课程、竞赛、论文翻译等服务。</p>', 13, 1, 1, 0, 0, 0, 1, 8, 'AI研习社 - AI学习社区', 'AI研习社是国内AI学习交流社区'),

('DataCamp', 'datacamp', '/logos/datacamp.png', 'https://www.datacamp.com', '数据科学学习平台，交互式课程', '<h2>DataCamp介绍</h2><p>DataCamp是数据科学学习平台，提供Python、R、SQL等交互式课程。</p>', 13, 0, 0, 0, 0, 0, 1, 9, 'DataCamp - 数据科学课程', 'DataCamp是数据科学交互式学习平台'),

('Learn Prompting', 'learn-prompting', '/logos/learnprompting.png', 'https://learnprompting.org', '免费Prompt Engineering课程', '<h2>Learn Prompting介绍</h2><p>Learn Prompting提供免费的提示工程教程，学习如何更好地使用AI。</p>', 13, 1, 1, 1, 0, 1, 1, 10, 'Learn Prompting - 提示工程教程', 'Learn Prompting是免费提示工程课程');


INSERT INTO `tools` (`name`, `slug`, `logo`, `website`, `short_desc`, `content`, `category_id`, `is_free`, `is_chinese`, `is_open_source`, `has_api`, `is_recommend`, `status`, `sort`, `seo_title`, `seo_description`) VALUES

('GPTZero', 'gptzero', '/logos/gptzero.png', 'https://gptzero.me', '领先的AI内容检测工具，识别AI生成文本', '<h2>GPTZero介绍</h2><p>GPTZero是领先的AI内容检测工具，可以识别文本是否由ChatGPT等AI生成。</p>', 14, 0, 0, 0, 1, 1, 1, 1, 'GPTZero - AI内容检测', 'GPTZero是领先的AI生成内容检测工具'),

('Originality.ai', 'originality-ai', '/logos/originality.png', 'https://originality.ai', 'AI内容检测和抄袭检查工具', '<h2>Originality.ai介绍</h2><p>Originality.ai提供AI内容检测和抄袭检查功能，适合内容创作者和编辑使用。</p>', 14, 0, 0, 0, 1, 1, 1, 2, 'Originality.ai - AI检测查重', 'Originality.ai是AI内容检测和查重工具'),

('Copyleaks', 'copyleaks', '/logos/copyleaks.png', 'https://copyleaks.com', '抄袭检测平台，支持AI内容识别', '<h2>Copyleaks介绍</h2><p>Copyleaks是专业的抄袭检测平台，同时支持AI生成内容检测功能。</p>', 14, 0, 1, 0, 1, 1, 1, 3, 'Copyleaks - 抄袭检测', 'Copyleaks是抄袭和AI内容检测平台'),

('ZeroGPT', 'zerogpt', '/logos/zerogpt.png', 'https://www.zerogpt.com', '免费AI文本检测工具', '<h2>ZeroGPT介绍</h2><p>ZeroGPT是免费的AI内容检测工具，可以识别ChatGPT、GPT-4等AI生成的文本。</p>', 14, 1, 0, 0, 0, 1, 1, 4, 'ZeroGPT - 免费AI检测', 'ZeroGPT是免费的AI生成内容检测工具'),

('Writer AI Detector', 'writer-detector', '/logos/writer.png', 'https://writer.com/ai-content-detector', 'Writer推出的免费AI内容检测器', '<h2>Writer AI Detector介绍</h2><p>Writer AI Detector是Writer公司提供的免费AI内容检测工具。</p>', 14, 1, 0, 0, 0, 0, 1, 5, 'Writer AI Detector - 免费检测', 'Writer AI Detector是免费AI内容检测工具'),

('Turnitin', 'turnitin', '/logos/turnitin.png', 'https://www.turnitin.com', '学术诚信平台，论文查重和AI检测', '<h2>Turnitin介绍</h2><p>Turnitin是全球领先的学术诚信平台，提供论文查重和AI内容检测功能。</p>', 14, 0, 0, 0, 1, 1, 1, 6, 'Turnitin - 学术查重', 'Turnitin是学术论文查重和AI检测平台'),

('Sapling', 'sapling', '/logos/sapling.png', 'https://sapling.ai/ai-content-detector', 'Sapling AI内容检测器', '<h2>Sapling介绍</h2><p>Sapling提供AI内容检测功能，帮助识别AI生成的文本内容。</p>', 14, 1, 0, 0, 1, 0, 1, 7, 'Sapling - AI内容检测', 'Sapling提供AI内容检测服务'),

('Content at Scale', 'content-at-scale', '/logos/contentatscale.png', 'https://contentatscale.ai/ai-content-detector', '免费AI内容检测器', '<h2>Content at Scale介绍</h2><p>Content at Scale提供免费的AI内容检测工具，检测文本是否由AI生成。</p>', 14, 1, 0, 0, 0, 0, 1, 8, 'Content at Scale Detector', 'Content at Scale提供免费AI检测'),

('Winston AI', 'winston-ai', '/logos/winstonai.png', 'https://gowinston.ai', '高准确率AI内容检测工具', '<h2>Winston AI介绍</h2><p>Winston AI是AI内容检测工具，以高准确率著称。</p>', 14, 0, 0, 0, 1, 0, 1, 9, 'Winston AI - AI内容检测', 'Winston AI是高准确率AI内容检测工具'),

('AIGC-X', 'aigc-x', '/logos/aigcx.png', 'https://www.aigc-x.com', '国产AI内容检测平台', '<h2>AIGC-X介绍</h2><p>AIGC-X是国产AI生成内容检测平台，支持中文内容检测。</p>', 14, 0, 1, 0, 0, 0, 1, 10, 'AIGC-X - 国产AI检测', 'AIGC-X是国产AI内容检测平台');


INSERT INTO `tools` (`name`, `slug`, `logo`, `website`, `short_desc`, `content`, `category_id`, `is_free`, `is_chinese`, `is_open_source`, `has_api`, `is_recommend`, `status`, `sort`, `seo_title`, `seo_description`) VALUES

('FlowGPT', 'flowgpt', '/logos/flowgpt.png', 'https://flowgpt.com', '最大的Prompt分享社区，海量提示词', '<h2>FlowGPT介绍</h2><p>FlowGPT是最大的AI Prompt分享社区，用户可以发现、分享和使用各种提示词。</p>', 15, 1, 1, 0, 0, 1, 1, 1, 'FlowGPT - Prompt分享社区', 'FlowGPT是最大的AI提示词分享社区'),

('PromptBase', 'promptbase', '/logos/promptbase.png', 'https://promptbase.com', 'Prompt交易市场，买卖优质提示词', '<h2>PromptBase介绍</h2><p>PromptBase是Prompt交易市场，用户可以购买和出售高质量的AI提示词。</p>', 15, 0, 1, 0, 0, 1, 1, 2, 'PromptBase - Prompt交易市场', 'PromptBase是AI提示词买卖交易平台'),

('PromptHero', 'prompthero', '/logos/prompthero.png', 'https://prompthero.com', 'AI图像Prompt搜索平台', '<h2>PromptHero介绍</h2><p>PromptHero是AI图像生成Prompt搜索平台，提供Midjourney、DALL-E等工具的提示词。</p>', 15, 1, 1, 0, 0, 1, 1, 3, 'PromptHero - AI绘画Prompt', 'PromptHero是AI图像生成提示词平台'),

('AIPRM', 'aiprm', '/logos/aiprm.png', 'https://www.aiprm.com', 'ChatGPT提示词管理扩展', '<h2>AIPRM介绍</h2><p>AIPRM是ChatGPT的Chrome扩展，提供海量预设提示词模板和管理功能。</p>', 15, 0, 1, 0, 0, 1, 1, 4, 'AIPRM - ChatGPT Prompt扩展', 'AIPRM是ChatGPT提示词管理工具'),

('PromptPerfect', 'promptperfect', '/logos/promptperfect.png', 'https://promptperfect.jina.ai', 'AI Prompt优化工具，自动改进提示词', '<h2>PromptPerfect介绍</h2><p>PromptPerfect是Prompt优化工具，可以自动改进和优化你的提示词。</p>', 15, 0, 1, 0, 1, 0, 1, 5, 'PromptPerfect - Prompt优化', 'PromptPerfect是AI提示词优化工具'),

('Awesome ChatGPT Prompts', 'awesome-prompts', '/logos/github.png', 'https://github.com/f/awesome-chatgpt-prompts', '开源ChatGPT提示词集合', '<h2>Awesome ChatGPT Prompts介绍</h2><p>GitHub上最受欢迎的ChatGPT提示词开源项目，收集优质提示词模板。</p>', 15, 1, 1, 1, 0, 1, 1, 6, 'Awesome ChatGPT Prompts', 'GitHub上最流行的ChatGPT提示词集合'),

('SnackPrompt', 'snackprompt', '/logos/snackprompt.png', 'https://snackprompt.com', 'Prompt分享和发现平台', '<h2>SnackPrompt介绍</h2><p>SnackPrompt是Prompt分享平台，用户可以发现和保存有用的AI提示词。</p>', 15, 1, 1, 0, 0, 0, 1, 7, 'SnackPrompt - Prompt分享', 'SnackPrompt是AI提示词分享平台'),

('ChatGPT Prompt Generator', 'prompt-generator', '/logos/promptgen.png', 'https://huggingface.co/spaces/merve/ChatGPT-prompt-generator', 'HuggingFace上的Prompt生成器', '<h2>ChatGPT Prompt Generator介绍</h2><p>这是Hugging Face Spaces上的Prompt生成工具，帮助创建更好的提示词。</p>', 15, 1, 1, 1, 0, 0, 1, 8, 'Prompt Generator - 提示词生成', 'Hugging Face上的ChatGPT提示词生成器'),

('Prompt Vibes', 'promptvibes', '/logos/promptvibes.png', 'https://www.promptvibes.com', 'ChatGPT提示词资源网站', '<h2>Prompt Vibes介绍</h2><p>Prompt Vibes提供分类整理的ChatGPT提示词资源，方便查找和使用。</p>', 15, 1, 1, 0, 0, 0, 1, 9, 'Prompt Vibes - Prompt资源', 'Prompt Vibes是ChatGPT提示词资源网站'),

('提示工程指南', 'promptingguide', '/logos/promptingguide.png', 'https://www.promptingguide.ai/zh', '全面的Prompt Engineering教程', '<h2>提示工程指南介绍</h2><p>提示工程指南是全面的Prompt Engineering教程，涵盖各种提示技术和最佳实践。</p>', 15, 1, 1, 1, 0, 1, 1, 10, '提示工程指南 - Prompt教程', '提示工程指南是Prompt Engineering学习资源'),

('Stable Video Diffusion', 'stable-video-diffusion', '/logos/svd.png', 'https://stability.ai', 'Stability AI开源的视频生成模型', '<h2>Stable Video Diffusion介绍</h2><p>Stable Video Diffusion是Stability AI推出的开源视频生成模型，支持文生视频和图生视频。</p>', 4, 1, 0, 1, 1, 0, 1, 11, 'Stable Video Diffusion - 开源视频生成', 'Stable Video Diffusion是Stability AI的开源视频生成模型'),

('Haiper', 'haiper', '/logos/haiper.png', 'https://www.haiper.ai', '新兴的AI视频生成平台', '<h2>Haiper介绍</h2><p>Haiper是一款新兴的AI视频生成工具，支持高质量文生视频功能。</p>', 4, 1, 0, 0, 1, 0, 1, 12, 'Haiper - AI视频生成', 'Haiper是新兴的AI视频生成平台'),

('Kling Pro', 'kling-pro', '/logos/klingpro.png', 'https://klingai.kuaishou.com', '可灵AI专业版，视频生成质量更高', '<h2>Kling Pro介绍</h2><p>Kling Pro是可灵AI的专业版本，提供更高视频生成质量和更长时间的视频输出。</p>', 4, 0, 1, 0, 1, 0, 1, 13, 'Kling Pro - 可灵专业版', 'Kling Pro是可灵AI的专业视频生成版本'),

('Colossyan', 'colossyan', '/logos/colossyan.png', 'https://colossyan.com', 'AI虚拟视频生成平台', '<h2>Colossyan介绍</h2><p>Colossyan是AI虚拟视频生成平台，支持创建AI虚拟人视频用于培训和营销。</p>', 4, 0, 0, 0, 1, 0, 1, 14, 'Colossyan - 虚拟人视频', 'Colossyan是AI虚拟人视频生成平台'),

('Pika 2.0', 'pika-2', '/logos/pika2.png', 'https://pika.art', 'Pika新一代视频生成模型', '<h2>Pika 2.0介绍</h2><p>Pika 2.0是Pika推出的新一代AI视频生成模型，视频质量和时长都有显著提升。</p>', 4, 1, 0, 0, 1, 0, 1, 15, 'Pika 2.0 - 新一代视频生成', 'Pika 2.0是新一代AI视频生成模型'),

('VALL-E', 'vall-e', '/logos/vall-e.png', 'https://www.microsoft.com/en-us/research/project/vall-e', '微软开发的语音合成模型', '<h2>VALL-E介绍</h2><p>VALL-E是微软开发的语音合成模型，仅需3秒音频样本即可克隆声音。</p>', 5, 1, 0, 1, 0, 0, 1, 11, 'VALL-E - 微软语音合成', 'VALL-E是微软的开源语音合成模型'),

('F5-TTS', 'f5-tts', '/logos/f5-tts.png', 'https://github.com/SWivid/F5-TTS', '开源语音克隆项目', '<h2>F5-TTS介绍</h2><p>F5-TTS是开源的语音克隆项目，支持快速声音克隆和高质量语音合成。</p>', 5, 1, 0, 1, 0, 0, 1, 12, 'F5-TTS - 开源语音克隆', 'F5-TTS是开源的语音克隆工具'),

('Play.ht', 'playht', '/logos/playht.png', 'https://play.ht', 'AI文本转语音平台', '<h2>Play.ht介绍</h2><p>Play.ht是AI文本转语音平台，支持多种语言和声音克隆功能。</p>', 5, 0, 1, 0, 1, 0, 1, 13, 'Play.ht - 文本转语音', 'Play.ht是AI文本转语音平台'),

('Speechify', 'speechify', '/logos/speechify.png', 'https://speechify.com', 'AI文字转语音工具', '<h2>Speechify介绍</h2><p>Speechify是一款流行的AI文字转语音工具，支持文档和网页朗读。</p>', 5, 0, 1, 0, 0, 1, 1, 14, 'Speechify - 文字转语音', 'Speechify是AI文字转语音工具'),

('Kits.ai', 'kits-ai', '/logos/kits.png', 'https://www.kits.ai', 'AI声音克隆和变声平台', '<h2>Kits.ai介绍</h2><p>Kits.ai是AI声音克隆和变声平台，支持音乐人创作AI歌声。</p>', 5, 0, 0, 0, 1, 0, 1, 15, 'Kits.ai - 声音克隆平台', 'Kits.ai是AI声音克隆和变声平台'),

('Otter.ai', 'otter-ai', '/logos/otter.png', 'https://otter.ai', 'AI会议记录和转写工具', '<h2>Otter.ai介绍</h2><p>Otter.ai是AI会议记录工具，自动转写会议内容并生成摘要。</p>', 6, 0, 1, 0, 1, 0, 1, 11, 'Otter.ai - 会议记录', 'Otter.ai是AI会议记录工具'),

('Fireflies.ai', 'fireflies', '/logos/fireflies.png', 'https://fireflies.ai', 'AI会议助手和转录服务', '<h2>Fireflies.ai介绍</h2><p>Fireflies.ai是AI会议助手，自动记录、转录和分析会议内容。</p>', 6, 0, 1, 0, 1, 0, 1, 12, 'Fireflies.ai - 会议助手', 'Fireflies.ai是AI会议助手'),

('Grammarly', 'grammarly', '/logos/grammarly.png', 'https://www.grammarly.com', 'AI写作助手和语法检查工具', '<h2>Grammarly介绍</h2><p>Grammarly是AI写作助手，提供语法检查、拼写纠正和写作建议。</p>', 6, 0, 1, 0, 1, 1, 1, 13, 'Grammarly - 写作助手', 'Grammarly是AI写作助手'),

('Loom AI', 'loom-ai', '/logos/loom.png', 'https://www.loom.com', '带AI功能的视频录制和分享工具', '<h2>Loom AI介绍</h2><p>Loom AI是Loom推出的AI功能，自动生成视频标题、摘要和章节。</p>', 6, 0, 1, 0, 0, 0, 1, 14, 'Loom AI - 视频录制', 'Loom AI是带AI功能的视频录制工具'),

('Perplexity AI', 'perplexity', '/logos/perplexity.png', 'https://www.perplexity.ai', 'AI驱动的智能搜索引擎', '<h2>Perplexity AI介绍</h2><p>Perplexity AI是AI搜索引擎，提供准确、可信的搜索结果和引用来源。</p>', 6, 1, 1, 0, 1, 1, 1, 15, 'Perplexity AI - AI搜索引擎', 'Perplexity AI是AI驱动的智能搜索引擎'),

('Sourcegraph Cody', 'sourcegraph-cody', '/logos/sourcegraph.png', 'https://about.sourcegraph.com/cody', 'AI代码助手，支持代码库理解', '<h2>Sourcegraph Cody介绍</h2><p>Sourcegraph Cody是AI代码助手，能理解整个代码库并提供智能建议。</p>', 7, 0, 1, 0, 1, 0, 1, 11, 'Sourcegraph Cody - 代码助手', 'Sourcegraph Cody是AI代码助手'),

('Bito', 'bito', '/logos/bito.png', 'https://bito.ai', 'AI代码助手，集成IDE', '<h2>Bito介绍</h2><p>Bito是AI代码助手，集成到IDE中，提供代码生成和优化建议。</p>', 7, 0, 1, 0, 1, 0, 1, 12, 'Bito - AI代码助手', 'Bito是集成IDE的AI代码助手'),

('Amazon CodeGuru', 'codeguru', '/logos/codeguru.png', 'https://aws.amazon.com/codeguru', 'AWS代码审查和优化工具', '<h2>Amazon CodeGuru介绍</h2><p>Amazon CodeGuru是AWS的代码审查工具，使用机器学习提供代码优化建议。</p>', 7, 0, 1, 0, 1, 0, 1, 13, 'Amazon CodeGuru - 代码审查', 'Amazon CodeGuru是AWS代码审查工具'),

('Codacy', 'codacy', '/logos/codacy.png', 'https://www.codacy.com', '自动化代码质量分析平台', '<h2>Codacy介绍</h2><p>Codacy是自动化代码质量分析平台，支持多种编程语言的代码检查。</p>', 7, 0, 1, 0, 1, 0, 1, 14, 'Codacy - 代码质量分析', 'Codacy是自动化代码质量分析平台'),

('DeepCode', 'deepcode', '/logos/deepcode.png', 'https://www.deepcode.ai', 'AI驱动的代码静态分析工具', '<h2>DeepCode介绍</h2><p>DeepCode是AI驱动的代码静态分析工具，自动发现代码中的Bug和安全漏洞。</p>', 7, 0, 1, 0, 1, 0, 1, 15, 'DeepCode - 代码分析', 'DeepCode是AI代码静态分析工具');


-- 直接更新logo字段，使用API自动获取图标
UPDATE tools SET logo = CONCAT('https://www.google.com/s2/favicons?domain=', 
    REPLACE(REPLACE(website, 'https://', ''), 'http://', ''), '&sz=128');

-- 更新slug字段，添加/tools前缀
UPDATE tools SET slug = CONCAT('/tools', '/', slug);
UPDATE tools
SET slug = REPLACE(slug, '/tools/', '');

UPDATE categories SET slug = CONCAT('/categories', '/', slug);
# 把所有的分类 slug 至保留 后缀
UPDATE categories
SET slug = REPLACE(slug, '/categories/', '');

-- 更新各分类的工具数量
UPDATE categories c SET tool_count = (
    SELECT COUNT(*) FROM tools t WHERE t.category_id = c.id AND t.status = 1
);