/**
 * Data and Content Definitions
 * Extracted from dictionary, location, and locale files.
 */

// --- Dictionaries ---

const LANGUAGE_LABELS = {
    en: { en: 'English', zh: 'Chinese', jp: 'Japanese' },
    zh: { en: '英语', zh: '简体中文', jp: '日语' },
    jp: { en: '英語', zh: '中国語', jp: '日本語' }
};

const MODE_TRANSLATIONS = {
    'Sea': { en: 'Sea Freight', zh: '海运', jp: '海上輸送' },
    'Air': { en: 'Air Freight', zh: '空运', jp: '航空輸送' },
    'Land': { en: 'Land Transport', zh: '陆运', jp: '陸上輸送' }
};

const TRACKING_DICT = {
    delivered: {
        status: { en: 'Shipment Delivered', zh: '已送达', jp: '配達完了' },
        desc: { en: 'Cargo has been successfully delivered to the consignee.', zh: '货物已成功交付给收货人。', jp: '貨物は荷受人に正常に配達されました。' },
        loc: { en: 'Destination City', zh: '目的城市', jp: '仕向地' }
    },
    outForDelivery: {
        status: { en: 'Out for Delivery', zh: '派送中', jp: '配達中' },
        desc: { en: 'Cargo is on the truck for final delivery.', zh: '货物已装车，正在进行最终派送。', jp: '貨物は最終配達のためトラックに積載されています。' },
        loc: { en: 'Destination Distribution Center', zh: '目的地配送中心', jp: '仕向地配送センター' }
    },
    customsCleared: {
        status: { en: 'Customs Cleared', zh: '清关完成', jp: '通関完了' },
        desc: { en: 'Import customs documentation processed.', zh: '进口报关文件已处理完毕。', jp: '輸入通関書類が処理されました。' },
        loc: { en: 'Destination Port/Airport', zh: '目的港/机场', jp: '仕向港/空港' }
    },
    customsProgress: {
        status: { en: 'Customs Clearance in Progress', zh: '清关进行中', jp: '通関手続き中' },
        desc: { en: 'Import customs documentation processed.', zh: '正在处理进口报关文件。', jp: '輸入通関書類を処理しています。' },
        loc: { en: 'Destination Port/Airport', zh: '目的港/机场', jp: '仕向港/空港' }
    },
    departed: {
        status: { en: 'Vessel Departed', zh: '船舶离港', jp: '本船出港' },
        desc: { en: 'Shipment has departed from port of loading.', zh: '货物已离开装货港。', jp: '貨物は積出港を出発しました。' },
        loc: { en: 'Origin Port', zh: '始发港', jp: '積出港' }
    },
    received: {
        status: { en: 'Cargo Received', zh: '货物入仓', jp: '貨物搬入' },
        desc: { en: 'Shipment received at origin facility.', zh: '始发地设施已接收货物。', jp: '貨物が発送地施設に到着しました。' },
        loc: { en: 'Origin Warehouse', zh: '始发仓库', jp: '発送地倉庫' }
    },
    confirmed: {
        status: { en: 'Booking Confirmed', zh: '订舱确认', jp: '予約確認' },
        desc: { en: 'Shipping instructions received and booking confirmed.', zh: '收到托运指示，订舱已确认。', jp: '出荷指示を受領し、予約が確認されました。' },
        loc: { en: 'System', zh: '系统', jp: 'システム' }
    }
};

// --- Locations ---

const LOCATIONS = [
    { city: { en: "Antwerp", zh: "Antwerp", jp: "アントワープ" }, country: { en: "Belgium", zh: "比利时", jp: "ベルギー" }, code: "BEANR", region: "Europe" },
    { city: { en: "Busan", zh: "Busan", jp: "釜山" }, country: { en: "South Korea", zh: "韩国", jp: "韓国" }, code: "KRPUS", region: "Asia" },
    { city: { en: "Guangzhou", zh: "Guangzhou", jp: "広州" }, country: { en: "China", zh: "中国", jp: "中国" }, code: "CNCAN", region: "Asia" },
    { city: { en: "Hamburg", zh: "Hamburg", jp: "ハンブルク" }, country: { en: "Germany", zh: "德国", jp: "ドイツ" }, code: "DEHAM", region: "Europe" },
    { city: { en: "Hong Kong", zh: "Hong Kong", jp: "香港" }, country: { en: "Hong Kong", zh: "香港", jp: "香港" }, code: "HKHKG", region: "Asia" },
    { city: { en: "Jebel Ali", zh: "Jebel Ali", jp: "ジュベル・アリ" }, country: { en: "UAE", zh: "阿联酋", jp: "UAE" }, code: "AEJEA", region: "Middle East" },
    { city: { en: "Long Beach", zh: "Long Beach", jp: "ロングビーチ" }, country: { en: "USA", zh: "美国", jp: "アメリカ" }, code: "USLGB", region: "North America" },
    { city: { en: "Los Angeles", zh: "Los Angeles", jp: "ロサンゼルス" }, country: { en: "USA", zh: "美国", jp: "アメリカ" }, code: "USLAX", region: "North America" },
    { city: { en: "New York", zh: "New York", jp: "ニューヨーク" }, country: { en: "USA", zh: "美国", jp: "アメリカ" }, code: "USNYC", region: "North America" },
    { city: { en: "Ningbo", zh: "Ningbo", jp: "寧波" }, country: { en: "China", zh: "中国", jp: "中国" }, code: "CNNBG", region: "Asia" },
    { city: { en: "Qingdao", zh: "Qingdao", jp: "青島" }, country: { en: "China", zh: "中国", jp: "中国" }, code: "CNTAO", region: "Asia" },
    { city: { en: "Rotterdam", zh: "Rotterdam", jp: "ロッテルダム" }, country: { en: "Netherlands", zh: "荷兰", jp: "オランダ" }, code: "NLRTM", region: "Europe" },
    { city: { en: "Shanghai", zh: "Shanghai", jp: "上海" }, country: { en: "China", zh: "中国", jp: "中国" }, code: "CNSHA", region: "Asia" },
    { city: { en: "Shenzhen", zh: "Shenzhen", jp: "深セン" }, country: { en: "China", zh: "中国", jp: "中国" }, code: "CNSZX", region: "Asia" },
    { city: { en: "Singapore", zh: "Singapore", jp: "シンガポール" }, country: { en: "Singapore", zh: "新加坡", jp: "シンガポール" }, code: "SGSIN", region: "Asia" },
    { city: { en: "Tianjin", zh: "Tianjin", jp: "天津" }, country: { en: "China", zh: "中国", jp: "中国" }, code: "CNTSN", region: "Asia" },
    { city: { en: "Tokyo", zh: "Tokyo", jp: "東京" }, country: { en: "Japan", zh: "日本", jp: "日本" }, code: "JPTYO", region: "Asia" },
    { city: { en: "Vancouver", zh: "Vancouver", jp: "バンクーバー" }, country: { en: "Canada", zh: "加拿大", jp: "カナダ" }, code: "CAVAN", region: "North America" },
];

// --- Content (Analyzed from localized files) ---

const CONTENT = {
    en: {
        nav: [
            { id: 'home', label: 'Home' },
            { id: 'services', label: 'Services' },
            { id: 'dashboard', label: 'Status' },
            { id: 'about', label: 'About Us' },
            { id: 'contact', label: 'Contact' },
        ],
        general: {
            systemStatus: "System Operational",
            systemOptimal: "System Optimal",
            globalNetwork: "Global Network",
            trackShipment: "Track Shipment",
            contactEmail: "logistics@senibo.shop",
            privacyPolicy: "Privacy Policy",
            termsOfService: "Terms of Service",
            sitemap: "Sitemap",
            loading: "Loading...",
            searchPlaceholder: "Search city...",
            noResults: "No locations found."
        },
        hero: {
            titlePrefix: "Seamless",
            titleGlobal: "Global",
            titleSolutions: "Logistics Solutions",
            subtitle: "Connecting markets through Sea, Air, and Land. We deliver reliability, efficiency, and scale to your supply chain.",
            cta: "Get a Quote",
            explore: "Explore Services",
            badge: "Next Gen Logistics AI",
            tabs: { quote: "Request Quote", track: "Track Shipment" },
            quoteTab: {
                modes: ['Sea', 'Air', 'Land'],
                originPlaceholder: "Select Origin City",
                destPlaceholder: "Select Destination City",
                calculateBtn: "Calculate Price"
            },
            trackTab: {
                systemOnline: "System Online: Real-time satellite tracking",
                label: "Tracking Number",
                placeholder: "0000000",
                btnIdle: "Trace Cargo",
                btnScanning: "Scanning Network...",
                errorEmpty: "Please enter the 7-digit tracking number.",
                errorInvalid: "Invalid tracking number (Test numbers not supported)."
            }
        },
        dashboard: {
            title: "Operations Center",
            subtitle: "Real-time network activity and system status.",
            labels: {
                serverStatus: "Server Status",
                activeRoutes: "Active Routes",
                avgLatency: "Avg Latency",
                dataProcessed: "Data Processed"
            },
            clockLocations: {
                singapore: "Singapore",
                london: "London",
                newYork: "New York",
                dubai: "Dubai",
                asiaLabel: "HQ / Asia",
                europeLabel: "Europe",
                americasLabel: "Americas",
                meLabel: "Middle East"
            },
            metrics: {
                uptime: "Uptime",
                load: "Load"
            },
            timeline: "Timeline",
            logsTitle: "Live Network Logs"
        },
        about: {
            title: "Who We Are",
            label: "Corporate Profile",
            content: "Senibo.shop is a premier international trade and logistics provider. Founded with a vision to simplify global commerce, we operate a robust network spanning major ports and trade hubs worldwide.",
            liveMetric: "Live Metric",
            warehouseCapacity: "Warehouse Capacity",
            stats: [
                { value: "150+", label: "Countries Served" },
                { value: "10k+", label: "Shipments/Year" },
                { value: "24/7", label: "Support" },
            ],
            certifications: {
                isoTitle: "ISO 9001 Certified",
                isoDesc: "International standard for quality management systems.",
                crossBorderTitle: "Cross-Border Expertise",
                crossBorderDesc: "Seamless customs clearance across 150+ jurisdictions.",
                deliveryRate: "On-Time Delivery Rate"
            }
        },
        services: {
            title: "Our Services",
            label: "Global Solutions",
            subtitle: "Comprehensive solutions tailored to your cargo needs.",
            efficiencyLabel: "Efficiency",
            cta: "Learn More",
            viewCatalog: "View Full Catalog",
            more: "+More",
            items: [
                {
                    id: 'sea-freight',
                    title: "Sea Freight",
                    shortDesc: "Cost-effective ocean transport for FCL and LCL shipments.",
                    fullDesc: "Our Sea Freight division offers comprehensive ocean freight services including FCL, LCL, and special project cargo.",
                    features: ["FCL & LCL Consolidation", "Port-to-Port & Door-to-Door", "Hazardous Goods", "Break Bulk"],
                    iconName: 'ship',
                    efficiency: 98
                },
                {
                    id: 'air-freight',
                    title: "Air Freight",
                    shortDesc: "Rapid transit for time-sensitive and high-value goods.",
                    fullDesc: "When time is money, our Air Freight solutions deliver. Express, standard, and deferred air cargo services.",
                    features: ["Express Delivery (24-48h)", "Air Charter", "Temperature Controlled", "Door-to-Airport"],
                    iconName: 'plane',
                    efficiency: 85
                },
                {
                    id: 'land-transport',
                    title: "Land Transport",
                    shortDesc: "Reliable trucking and rail networks across continents.",
                    fullDesc: "Connecting the first and last mile. Our land transport network covers extensive road and rail routes.",
                    features: ["FTL (Full Truck Load)", "LTL (Less than Truck Load)", "Intermodal Rail", "Heavy Haulage"],
                    iconName: 'truck',
                    efficiency: 92
                },
                {
                    id: 'warehousing',
                    title: "Warehousing",
                    shortDesc: "Secure storage and distribution centers globally.",
                    fullDesc: "Our global warehousing footprint allows you to store goods closer to your customers.",
                    features: ["Bonded Facilities", "Inventory Management", "Order Fulfillment", "Cross-docking"],
                    iconName: 'warehouse',
                    efficiency: 78
                },
                {
                    id: 'customs',
                    title: "Customs Brokerage",
                    shortDesc: "Expert navigation of complex international regulations.",
                    fullDesc: "Avoid delays and penalties with our expert customs brokerage. We handle documentation and compliance.",
                    features: ["Import/Export Clearance", "Tariff Consultation", "Documentation Prep", "Duty Drawback"],
                    iconName: 'file-check',
                    efficiency: 96
                },
                {
                    id: 'supply-chain',
                    title: "Supply Chain",
                    shortDesc: "End-to-end management and consultation.",
                    fullDesc: "We don't just move boxes; we design supply chains. Our consultants analyze your logistics flow.",
                    features: ["Network Design", "Risk Management", "Vendor Management", "Analytics"],
                    iconName: 'package',
                    efficiency: 88
                }
            ]
        },
        contact: {
            title: "Contact Us",
            label: "Connect",
            subtitle: "Ready to move your business forward? Get in touch.",
            labels: {
                headquarters: "Headquarters",
                support: "24/7 Support",
                inquiries: "Business Inquiries",
                viewLocations: "View All Office Locations"
            },
            form: {
                title: "Send Message",
                name: "Your Name",
                email: "Email Address",
                message: "Message / Inquiry",
                submit: "Send Message",
                success: "Sent Successfully"
            },
            info: {
                address: "12 Marina Boulevard, Marina Bay Financial Centre, Singapore 018982",
                phone: "+65 6789 1234",
                email: "logistics@senibo.shop"
            }
        },
        modals: {
            globalNetwork: {
                title: "Global Network",
                description: "We operate in over 150 countries with strategic hubs in major trading zones.",
                regions: { asia: "Asia Pacific", europe: "Europe", na: "North America", me: "Middle East" },
                lists: {
                    asia: ["Singapore (HQ)", "Shanghai, China", "Tokyo, Japan", "Busan, South Korea"],
                    europe: ["Rotterdam, Netherlands", "Hamburg, Germany", "Antwerp, Belgium", "Felixstowe, UK"],
                    na: ["Los Angeles, USA", "New York, USA", "Vancouver, Canada"],
                    me: ["Jebel Ali, UAE", "Jeddah, Saudi Arabia"]
                }
            },
            serviceCatalog: {
                title: "Service Catalog 2024",
                downloadTitle: "Download Full Brochure",
                downloadMeta: "PDF format • 4.2 MB",
                btnDownload: "Download",
                btnDownloaded: "Downloaded",
                btnSaving: "Saving...",
                tableHeaders: { ref: "Ref Code", name: "Service Name", action: "Action" }
            },
            serviceDetail: {
                badge: "Premium Service",
                featuresTitle: "Service Features",
                btnInquire: "Inquire About This"
            },
            quoteInput: {
                title: "Quick Quote Selection",
                subtitle: "Select a service category to begin your inquiry."
            },
            quoteResult: {
                title: "Freight Estimate",
                days: "Days",
                baseFreight: "Base Freight Cost",
                fuelSurcharge: "Fuel Surcharge (BAF)",
                insurance: "Cargo Insurance",
                total: "TOTAL ESTIMATE",
                disclaimer: "This is a generated estimate based on current market indices. Final invoice amount may vary.",
                btnSavePdf: "Save PDF",
                btnSaving: "Saving...",
                btnSaved: "Saved PDF",
                btnContact: "Contact Us",
                validUntilLabel: "Valid until"
            },
            tracking: {
                currentStatus: "Current Status",
                errorTitle: "Details Not Found",
                errorDesc: "Please verify the tracking number and try again, or contact customer support."
            },
            legal: {
                privacyContent: "At Senibo.shop, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our logistics services. We only collect data necessary for shipment processing and communication. Your data is encrypted and never shared with unauthorized third parties.",
                privacySections: [
                    {
                        title: "1. Data Collection",
                        content: "We collect information provided directly by you, such as names, email addresses, and shipment details, to facilitate our logistics services."
                    },
                    {
                        title: "2. Data Usage",
                        content: "Your data is used to process shipments, provide tracking updates, and improve our services. We do not sell your personal data."
                    },
                    {
                        title: "3. Security",
                        content: "We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure."
                    }
                ],
                termsContent: "By accessing and using Senibo.shop's services, you agree to comply with these Terms of Service. Our services are provided 'as is' without warranties of any kind. Senibo.shop is not liable for indirect damages arising from the use of our platform. Users are responsible for the accuracy of shipment declarations.",
                termsSections: [
                    {
                        title: "1. Service Acceptance",
                        content: "By booking a shipment, you confirm that the cargo does not contain prohibited items and complies with all applicable laws."
                    },
                    {
                        title: "2. Liability Limits",
                        content: "Our liability for lost or damaged cargo is limited to standard industry conventions unless additional insurance is purchased."
                    },
                    {
                        title: "3. Payment Terms",
                        content: "Payment must be made in full upon issuance of the invoice. Late payments may incur interest charges."
                    }
                ]
            },
            sitemap: {
                headers: {
                    main: "Main Sections",
                    services: "Services",
                    legal: "Legal & Support"
                }
            }
        },
        footer: {
            copyright: "© 2024 Senibo.shop Logistics. All rights reserved.",
            disclaimer: "Connecting global markets with speed, reliability, and innovation."
        }
    },
    zh: {
        nav: [
            { id: 'home', label: '首页' },
            { id: 'services', label: '服务方案' },
            { id: 'dashboard', label: '运营状态' },
            { id: 'about', label: '企业概况' },
            { id: 'contact', label: '联系我们' },
        ],
        general: {
            systemStatus: "系统运行正常",
            systemOptimal: "系统最佳状态",
            globalNetwork: "全球网络",
            trackShipment: "货物追踪",
            contactEmail: "logistics@senibo.shop",
            privacyPolicy: "隐私政策",
            termsOfService: "服务条款",
            sitemap: "网站地图",
            loading: "加载中...",
            searchPlaceholder: "搜索城市...",
            noResults: "未找到相关地点"
        },
        hero: {
            titlePrefix: "连接全球",
            titleGlobal: "全球",
            titleSolutions: "物流解決方案",
            subtitle: "贯通海陆空，链动全球市场。我们致力于为您的供应链注入可靠性、高效能与规模化優勢。",
            cta: "立即报价",
            explore: "探索服务",
            badge: "下一代物流 AI",
            tabs: { quote: "获取报价", track: "货物追踪" },
            quoteTab: {
                modes: ['海运', '空运', '陆运'],
                originPlaceholder: "选择始发城市",
                destPlaceholder: "选择目的城市",
                calculateBtn: "计算运费"
            },
            trackTab: {
                systemOnline: "系统在线：实时卫星追踪",
                label: "追踪号码",
                placeholder: "0000000",
                btnIdle: "追踪货物",
                btnScanning: "正在扫描网络...",
                errorEmpty: "请输入7位数的追踪号码。",
                errorInvalid: "追踪号码无效 (不支持测试号码)。"
            }
        },
        dashboard: {
            title: "运营中心",
            subtitle: "实时网络活动与系统状态监控。",
            labels: {
                serverStatus: "服务器状态",
                activeRoutes: "活跃航线",
                avgLatency: "平均延迟",
                dataProcessed: "数据吞吐量"
            },
            clockLocations: {
                singapore: "新加坡",
                london: "倫敦",
                newYork: "紐約",
                dubai: "杜拜",
                asiaLabel: "總部 / 亞洲",
                europeLabel: "歐洲",
                americasLabel: "美洲",
                meLabel: "中東"
            },
            metrics: {
                uptime: "運行時間",
                load: "負載"
            },
            timeline: "全局時間線",
            logsTitle: "實時網絡日誌"
        },
        about: {
            title: "关于 Senibo.shop",
            label: "企业概况",
            content: "Senibo.shop 是业界领先的国际贸易與物流服务商。成立伊始，我们便立志简化全球商业流通。凭借遍布全球主要港口和贸易枢纽的强大网络，我们不只是货物的搬运工。",
            liveMetric: "实时指标",
            warehouseCapacity: "仓库容量",
            stats: [
                { value: "150+", label: "覆盖国家" },
                { value: "10k+", label: "年运输量" },
                { value: "24/7", label: "全天候支持" }
            ],
            certifications: {
                isoTitle: "ISO 9001 认证",
                isoDesc: "国际质量管理体系标准。",
                crossBorderTitle: "跨境专业知识",
                crossBorderDesc: "在150多個司法管辖区实现无缝清关。",
                deliveryRate: "准时交付率"
            }
        },
        services: {
            title: "核心业务",
            label: "全球解決方案",
            subtitle: "为您量身定制的全方位物流解決方案。",
            efficiencyLabel: "效率指标",
            cta: "了解更多",
            viewCatalog: "查看完整目录",
            more: "+更多",
            items: [
                {
                    id: 'sea-freight',
                    title: "海运服务",
                    shortDesc: "针对整箱 (FCL) 和拼箱 (LCL) 提供高性价比的海洋运输。",
                    fullDesc: "我们的海运部门提供全面的海洋货运服务，包括整箱 (FCL)、拼箱 (LCL) 以及特殊项目货物。",
                    features: ["整箱与拼箱整合", "港到港与门到门", "危险品运输", "散装货运"],
                    iconName: 'ship',
                    efficiency: 98,
                    tag: "FCL & LCL 整箱与拼箱服务"
                },
                {
                    id: 'air-freight',
                    title: "空运服务",
                    shortDesc: "为时效要求高、价值昂贵的货物提供快速转运。",
                    fullDesc: "时间就是金钱，我们的空运解决方案为您保驾护航。提供特快、标准及延时航空货运服务。",
                    features: ["急速送达 (24-48小时)", "包机服务", "温控运输", "门到机场"],
                    iconName: 'plane',
                    efficiency: 85,
                    tag: "急速送达 (24-48小时)"
                },
                {
                    id: 'land-transport',
                    title: "陆运服务",
                    shortDesc: "跨越洲际、可靠的卡车和铁路运输网络。",
                    fullDesc: "连接第一公里和最后一公里。我们的陆地运输网络覆盖广泛的公路和铁路路线。",
                    features: ["整车运输 (FTL)", "零担运输 (LTL)", "铁路联运", "重型运输"],
                    iconName: 'truck',
                    efficiency: 92,
                    tag: "FTL 整车运输"
                },
                {
                    id: 'warehousing',
                    title: "仓储服务",
                    shortDesc: "遍布全球的安全仓储和配送中心。",
                    fullDesc: "我们的全球仓储布局让您可以将货物存储在更靠近客户的地方。",
                    features: ["保税设施", "库存管理", "订单履行", "越库作业"],
                    iconName: 'warehouse',
                    efficiency: 78,
                    tag: "保税仓储设施"
                },
                {
                    id: 'customs',
                    title: "报关代理",
                    shortDesc: "专业引导、应对复杂的国际贸易法规。",
                    fullDesc: "凭借我们的专业报关服务，避免延误和罚款。我们处理所有文件和合规事宜。",
                    features: ["进出口清关", "关税咨询", "文件准备", "出口退税"],
                    iconName: 'file-check',
                    efficiency: 96,
                    tag: "进出口清关服务"
                },
                {
                    id: 'supply-chain',
                    title: "供应链管理",
                    shortDesc: "端到端管理与咨询，优化物流流程。",
                    fullDesc: "我们不只是搬运箱子；我们设计供应链。我们的顾问分析您的物流流程。",
                    features: ["网络设计", "风险管理", "供应商管理", "数据分析"],
                    iconName: 'package',
                    efficiency: 88,
                    tag: "网络规划与设计"
                }
            ]
        },
        contact: {
            title: "联系我们",
            label: "建立连接",
            subtitle: "准备好拓展您的全球业务了吗？",
            labels: {
                headquarters: "总部",
                support: "24/7 技术支持",
                inquiries: "业务咨询",
                viewLocations: "查看所有办事处"
            },
            form: {
                title: "发送信息",
                name: "您的姓名",
                email: "电子邮箱",
                message: "咨询内容",
                submit: "发送信息",
                success: "发送成功"
            },
            info: {
                address: "新加坡滨海湾金融中心滨海大道12号，邮编 018982",
                phone: "+65 6789 1234",
                email: "logistics@senibo.shop"
            }
        },
        modals: {
            globalNetwork: {
                title: "全球网络",
                description: "我们在150多个国家/地区开展业务，在主要贸易区设有战略中心。",
                regions: { asia: "亚太地区", europe: "欧洲", na: "北美", me: "中东" },
                lists: {
                    asia: ["新加坡 (总部)", "中国上海", "日本东京", "韩国釜山"],
                    europe: ["荷兰鹿特丹", "德国汉堡", "比利时安特卫普", "英国费利克斯托"],
                    na: ["美国洛杉矶", "美国纽约", "加拿大温哥华"],
                    me: ["阿联酋杰贝阿里", "沙特阿拉伯吉达"]
                }
            },
            serviceCatalog: {
                title: "2024 服务目录",
                downloadTitle: "下载完整手册",
                downloadMeta: "PDF 格式 • 4.2 MB",
                btnDownload: "下载",
                btnDownloaded: "已下载",
                btnSaving: "保存中...",
                tableHeaders: { ref: "参考代码", name: "服务名称", action: "操作" }
            },
            serviceDetail: {
                badge: "高级服务",
                featuresTitle: "服务特性",
                btnInquire: "咨询此服务"
            },
            quoteInput: {
                title: "快速报价选择",
                subtitle: "选择一个服务类别以开始您的咨询。"
            },
            quoteResult: {
                title: "运费估算",
                days: "天",
                baseFreight: "基本运费",
                fuelSurcharge: "燃油附加费 (BAF)",
                insurance: "货物保险",
                total: "预估总额",
                disclaimer: "这是基于当前市场指数生成的估算。最终发票金额可能因具体重量、体积和发货日期而异。",
                btnSavePdf: "保存 PDF",
                btnSaving: "保存中...",
                btnSaved: "已保存 PDF",
                btnContact: "联系我们",
                validUntilLabel: "有效期至"
            },
            tracking: {
                currentStatus: "当前状态",
                errorTitle: "未找到详情",
                errorDesc: "请核对追踪号码并重试，或联系客户支持。"
            },
            legal: {
                privacyContent: "在 Senibo.shop，我们要致力于保护您的隐私。本隐私政策概述了我们在您使用我们的物流服务时如何收集、使用和保护您的个人信息。我们仅收集包裹处理和沟通所需的数据。您的数据已加密，绝不会与未经授权的第三方共享。",
                privacySections: [
                    { title: "1. 数据收集", content: "我们收集您直接提供的信息（如姓名、电子邮件地址和货物详情），以促进我们的物流服务。" },
                    { title: "2. 数据使用", content: "您的数据用于处理货物、提供追踪更新和改进我们的服务。我们不会出售您的个人数据。" },
                    { title: "3. 安全保障", content: "我们实施行业标准的安全措施，以防止您的数据遭到未经授权的访问、篡改 or 披露。" }
                ],
                termsContent: "访问和使用 Senibo.shop 的服务即表示您同意遵守这些服务条款。我们的服务按“原样”提供，不提供任何形式的保证。Senibo.shop 不对因使用我们的平台而造成的间接损失负责。用户需对货运申报的准确性负责。",
                termsSections: [
                    { title: "1. 服务接受", content: "预订货物即表示您确认货物不包含违禁物品，并符合所有适用法律。" },
                    { title: "2. 责任限制", content: "除非购买了额外保险，否则我们对货物丢失或损坏的责任仅限于行业标准公约。" },
                    { title: "3. 付款条款", content: "必须在开具发票后全额付款。逾期付款可能会产生利息费用。" }
                ]
            },
            sitemap: {
                headers: {
                    main: "主要板块",
                    services: "服务项目",
                    legal: "法律与支持"
                }
            }
        },
        footer: {
            copyright: "© 2024 Senibo.shop Logistics. 版权所有。",
            disclaimer: "以速度、可靠性和创新连接全球市场。"
        }
    },
    jp: {
        nav: [
            { id: 'home', label: 'ホーム' },
            { id: 'services', label: 'サービス' },
            { id: 'dashboard', label: '稼働状況' },
            { id: 'about', label: '企業概要' },
            { id: 'contact', label: 'お問い合わせ' },
        ],
        general: {
            systemStatus: "システム正常稼働中",
            systemOptimal: "システム最適状態",
            globalNetwork: "グローバル・ネットワーク",
            trackShipment: "貨物追跡",
            contactEmail: "logistics@senibo.shop",
            privacyPolicy: "プライバシーポリシー",
            termsOfService: "利用規約",
            sitemap: "サイトマップ",
            loading: "読み込み中...",
            searchPlaceholder: "都市を検索...",
            noResults: "場所が見つかりません"
        },
        hero: {
            titlePrefix: "シームレスな",
            titleGlobal: "グローバル",
            titleSolutions: "物流ソリューション",
            subtitle: "海・陸・空で世界市場をつなぐ。信頼性、効率性、そしてスケールメリットを貴社のサプライチェーンに提供します。",
            cta: "お見積り",
            explore: "サービスを探す",
            badge: "次世代物流 AI",
            tabs: { quote: "見積依頼", track: "貨物追跡" },
            quoteTab: {
                modes: ['海上', '航空', '陸上'],
                originPlaceholder: "出発地を選択",
                destPlaceholder: "目的地を選択",
                calculateBtn: "運賃を計算"
            },
            trackTab: {
                systemOnline: "システムオンライン：リアルタイム衛星追跡",
                label: "追跡番号",
                placeholder: "0000000",
                btnIdle: "貨物を追跡",
                btnScanning: "ネットワークスキャン中...",
                errorEmpty: "7桁の追跡番号を入力してください。",
                errorInvalid: "無効な追跡番号です (テスト番号はサポートされていません)。"
            }
        },
        dashboard: {
            title: "オペレーションセンター",
            subtitle: "リアルタイムのネットワーク活動とシステムステータス。",
            labels: {
                serverStatus: "サーバステータス",
                activeRoutes: "アクティブルート",
                avgLatency: "平均レイテンシ",
                dataProcessed: "データ処理量"
            },
            clockLocations: {
                singapore: "シンガポール",
                london: "ロンドン",
                newYork: "ニューヨーク",
                dubai: "ドバイ",
                asiaLabel: "本部 / アジア",
                europeLabel: "ヨーロッパ",
                americasLabel: "南北アメリカ",
                meLabel: "中東"
            },
            metrics: {
                uptime: "稼働時間",
                load: "負荷"
            },
            timeline: "タイムライン",
            logsTitle: "ライブ・ネットワーク・ログ"
        },
        about: {
            title: "Senibo.shopについて",
            label: "企業概要",
            content: "Senibo.shopは、国際貿易および物流のリーディングカンパニーです。世界の商取引を簡素化するというビジョンのもと、世界中の主要港湾と貿易拠点を網羅する強固なネットワークを構築しています。",
            liveMetric: "ライブ指標",
            warehouseCapacity: "倉庫容量",
            stats: [
                { value: "150+", label: "サービス提供国" },
                { value: "10k+", label: "年間取扱量" },
                { value: "24/7", label: "サポート体制" }
            ],
            certifications: {
                isoTitle: "ISO 9001 認証",
                isoDesc: "品質マネジメントシステムの国際規格。",
                crossBorderTitle: "クロスボーダーの専門知識",
                crossBorderDesc: "150以上の法域でのシームレスな通関。",
                deliveryRate: "定時配送率"
            }
        },
        services: {
            title: "事業内容",
            label: "グローバルソリューション",
            subtitle: "お客様の貨物ニーズに合わせた包括的なソリューション。",
            efficiencyLabel: "効率性",
            cta: "詳細を見る",
            viewCatalog: "カタログ一覧",
            more: "+その他",
            items: [
                {
                    id: 'sea-freight',
                    title: "海上輸送",
                    shortDesc: "FCLおよびLCL貨物のためのコスト効率の高い海上輸送。",
                    fullDesc: "海上輸送部門では、FCL、LCL、および特殊プロジェクトカーゴを含む、包括的な海上貨物サービスを提供しています。",
                    features: ["FCL & LCL 混載", "港から港・ドアからドア", "危険物輸送", "バルク貨物"],
                    iconName: 'ship',
                    efficiency: 98,
                    tag: "FCL & LCL 混載サービス"
                },
                {
                    id: 'air-freight',
                    title: "航空輸送",
                    shortDesc: "緊急性の高い貨物や高付加価値製品のための高速輸送。",
                    fullDesc: "時間が重要な場合、当社の航空輸送ソリューションが力を発揮します。エクスプレス、標準、および延滞航空貨物サービスを提供します。",
                    features: ["エクスプレス配送 (24-48H)", "チャーター便", "温度管理輸送", "ドア・ツー・エアポート"],
                    iconName: 'plane',
                    efficiency: 85,
                    tag: "エクスプレス配送 (24-48H)"
                },
                {
                    id: 'land-transport',
                    title: "陸上輸送",
                    shortDesc: "大陸全域をカバーする信頼性の高いトラック・鉄道ネットワーク。",
                    fullDesc: "最初と最後の1マイルをつなぐ。当社の陸上輸送ネットワークは、広範な道路および鉄道ルートをカバーしています。",
                    features: ["貸切輸送 (FTL)", "混載輸送 (LTL)", "鉄道複合一貫輸送", "重量物輸送"],
                    iconName: 'truck',
                    efficiency: 92,
                    tag: "FTL 貸切輸送"
                },
                {
                    id: 'warehousing',
                    title: "倉庫・保管",
                    shortDesc: "世界各地に展開する安全な保管・配送センター。",
                    fullDesc: "当社のグローバルな倉庫拠点により、お客様の近くに商品を保管することが可能になります。",
                    features: ["保税施設", "在庫管理", "注文履行", "クロスドッキング"],
                    iconName: 'warehouse',
                    efficiency: 78,
                    tag: "保税施設"
                },
                {
                    id: 'customs',
                    title: "通関業務",
                    shortDesc: "複雑な国際規制に対応する専門家による通関サポート。",
                    fullDesc: "専門家による通関サービスで、遅延や罰金を回避します。すべての書類作成とコンプライアンスを処理します。",
                    features: ["輸出入通関", "関税相談", "書類作成", "関税払い戻し"],
                    iconName: 'file-check',
                    efficiency: 96,
                    tag: "輸出入通関サービス"
                },
                {
                    id: 'supply-chain',
                    title: "サプライチェーン",
                    shortDesc: "エンドツーエンドの管理とコンサルティング。",
                    fullDesc: "単に箱を運ぶだけでなく、サプライチェーンを設計します。当社のコンサルタントが物流フローを分析します。",
                    features: ["ネットワーク設計", "リスク管理", "ベンダー管理", "アナリティクス"],
                    iconName: 'package',
                    efficiency: 88,
                    tag: "ネットワーク設計"
                }
            ]
        },
        contact: {
            title: "お問い合わせ",
            label: "コネクト",
            subtitle: "ビジネスを次のステージへ。お気軽にご相談ください。",
            labels: {
                headquarters: "本社",
                support: "24/7 サポート",
                inquiries: "ビジネスに関するお問い合わせ",
                viewLocations: "すべての拠点を見る"
            },
            form: {
                title: "メッセージを送信",
                name: "お名前",
                email: "メールアドレス",
                message: "お問い合わせ内容",
                submit: "送信する",
                success: "送信完了"
            },
            info: {
                address: "シンガポール 018982 マリーナベイ・ファイナンシャルセンター 12",
                phone: "+65 6789 1234",
                email: "logistics@senibo.shop"
            }
        },
        modals: {
            globalNetwork: {
                title: "グローバルネットワーク",
                description: "当社は150カ国以上で事業を展開し、主要な貿易地域に戦略的拠点を置いています。",
                regions: { asia: "アジア太平洋", europe: "ヨーロッパ", na: "北米", me: "中東" },
                lists: {
                    asia: ["シンガポール (本社)", "中国上海", "日本東京", "韓国釜山"],
                    europe: ["オランダ ロッテルダム", "ドイツ ハンブルク", "ベルギー アントワープ", "イギリス フェリクストウ"],
                    na: ["アメリカ ロサンゼルス", "アメリカ ニューヨーク", "カナダ バンクーバー"],
                    me: ["UAE ジュベル・アリ", "サウジアラビア ジェッダ"]
                }
            },
            serviceCatalog: {
                title: "サービスカタログ 2024",
                downloadTitle: "完全版パンフレットをダウンロード",
                downloadMeta: "PDF形式 • 4.2 MB",
                btnDownload: "ダウンロード",
                btnDownloaded: "ダウンロード済み",
                btnSaving: "保存中...",
                tableHeaders: { ref: "参照コード", name: "サービス名", action: "操作" }
            },
            serviceDetail: {
                badge: "プレミアムサービス",
                featuresTitle: "サービスの特徴",
                btnInquire: "このサービスについて問い合わせる"
            },
            quoteInput: {
                title: "クイック見積選択",
                subtitle: "サービスカテゴリを選択してお問い合わせを開始してください。"
            },
            quoteResult: {
                title: "運賃見積",
                days: "日",
                baseFreight: "基本運賃",
                fuelSurcharge: "燃料サーチャージ (BAF)",
                insurance: "貨物保険",
                total: "合計見積額",
                disclaimer: "これは現在の市場指標に基づく見積もりです。最終請求額は、具体的な重量、体積、出荷日によって異なる場合があります。",
                btnSavePdf: "PDFを保存",
                btnSaving: "保存中...",
                btnSaved: "保存済み",
                btnContact: "お問い合わせ",
                validUntilLabel: "有効期限"
            },
            tracking: {
                currentStatus: "現在のステータス",
                errorTitle: "詳細が見つかりません",
                errorDesc: "追跡番号を確認して再試行するか、カスタマーサポートにお問い合わせください。"
            },
            legal: {
                privacyContent: "Senibo.shopでは、お客様のプライバシー保護に取り組んでいます。本プライバシーポリシーでは、当社の物流サービスをご利用いただく際に、お客様の個人情報をどのように収集、使用、保護するかについて概説します。当社は、貨物処理および連絡に必要なデータのみを収集します。お客様のデータは暗号化され、許可されていない第三者と共有されることはありません。",
                privacySections: [
                    { title: "1. データ収集", content: "当社は、物流サービスを促進するために、氏名、メールアドレス、貨物詳細など、お客様から直接提供された情報を収集します。" },
                    { title: "2. データ使用", content: "お客様のデータは、貨物の処理、追跡情報の更新、およびサービスの向上のために使用されます。当社はお客様の個人データを販売しません。" },
                    { title: "3. セキュリティ", content: "当社は、不正アクセス、改ざん、または開示からお客様のデータを保護するために、業界標準のセキュリティ対策を実施しています。" }
                ],
                termsContent: "Senibo.shopのサービスにアクセスして使用することにより、これらの利用規約を遵守することに同意したことになります。当社のサービスは「現状有姿」で提供され、いかなる種類の保証もありません。Senibo.shopは、当社プラットフォームの使用に起因する間接的な損害について責任を負いません。ユーザーは、貨物申告の正確性について責任を負います。",
                termsSections: [
                    { title: "1. サービス受諾", content: "貨物を予約することにより、貨物に禁止品目が含まれておらず、適用されるすべての法律に準拠していることを確認したことになります。" },
                    { title: "2. 責任制限", content: "除非購買了額外保險、それ以外の紛失または破損した貨物に対する当社の責任は、業界標準の条約に限定されます。" },
                    { title: "3. 支払い条件", content: "請求書発行時に全額を支払う必要があります。支払いが遅れた場合、利息請求が発生する可能性があります。" }
                ]
            },
            sitemap: {
                headers: {
                    main: "メインセクション",
                    services: "サービス",
                    legal: "法務・サポート"
                }
            }
        },
        footer: {
            copyright: "© 2024 Senibo.shop Logistics. All rights reserved.",
            disclaimer: "スピード、信頼性、革新で世界市場をつなぐ。"
        }
    }
};
