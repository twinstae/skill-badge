import React from 'react';
import type { HeroIconName } from './HeroIconName';

export const iconDict: Record<
	HeroIconName,
	React.LazyExoticComponent<
		(props: React.SVGProps<SVGSVGElement>) => JSX.Element
	>
> = {
	CommandLineIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CommandLineIcon'),
	),
	AcademicCapIcon: React.lazy(
		() => import('@heroicons/react/24/outline/AcademicCapIcon'),
	),
	AdjustmentsHorizontalIcon: React.lazy(
		() => import('@heroicons/react/24/outline/AdjustmentsHorizontalIcon'),
	),
	AdjustmentsVerticalIcon: React.lazy(
		() => import('@heroicons/react/24/outline/AdjustmentsVerticalIcon'),
	),
	ArchiveBoxArrowDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArchiveBoxArrowDownIcon'),
	),
	ArchiveBoxXMarkIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArchiveBoxXMarkIcon'),
	),
	ArchiveBoxIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArchiveBoxIcon'),
	),
	ArrowDownCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowDownCircleIcon'),
	),
	ArrowDownLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowDownLeftIcon'),
	),
	ArrowDownOnSquareStackIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowDownOnSquareStackIcon'),
	),
	ArrowDownOnSquareIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowDownOnSquareIcon'),
	),
	ArrowDownRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowDownRightIcon'),
	),
	ArrowDownTrayIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowDownTrayIcon'),
	),
	ArrowDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowDownIcon'),
	),
	ArrowLeftCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowLeftCircleIcon'),
	),
	ArrowLeftOnRectangleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowLeftOnRectangleIcon'),
	),
	ArrowLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowLeftIcon'),
	),
	ArrowLongDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowLongDownIcon'),
	),
	ArrowLongLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowLongLeftIcon'),
	),
	ArrowLongRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowLongRightIcon'),
	),
	ArrowLongUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowLongUpIcon'),
	),
	ArrowPathRoundedSquareIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowPathRoundedSquareIcon'),
	),
	ArrowPathIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowPathIcon'),
	),
	ArrowRightCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowRightCircleIcon'),
	),
	ArrowRightOnRectangleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowRightOnRectangleIcon'),
	),
	ArrowRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowRightIcon'),
	),
	ArrowSmallDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowSmallDownIcon'),
	),
	ArrowSmallLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowSmallLeftIcon'),
	),
	ArrowSmallRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowSmallRightIcon'),
	),
	ArrowSmallUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowSmallUpIcon'),
	),
	ArrowTopRightOnSquareIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowTopRightOnSquareIcon'),
	),
	ArrowTrendingDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowTrendingDownIcon'),
	),
	ArrowTrendingUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowTrendingUpIcon'),
	),
	ArrowUpCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUpCircleIcon'),
	),
	ArrowUpLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUpLeftIcon'),
	),
	ArrowUpOnSquareStackIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUpOnSquareStackIcon'),
	),
	ArrowUpOnSquareIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUpOnSquareIcon'),
	),
	ArrowUpRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUpRightIcon'),
	),
	ArrowUpTrayIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUpTrayIcon'),
	),
	ArrowUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUpIcon'),
	),
	ArrowUturnDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUturnDownIcon'),
	),
	ArrowUturnLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUturnLeftIcon'),
	),
	ArrowUturnRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUturnRightIcon'),
	),
	ArrowUturnUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUturnUpIcon'),
	),
	ArrowsPointingInIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowsPointingInIcon'),
	),
	ArrowsPointingOutIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowsPointingOutIcon'),
	),
	ArrowsRightLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowsRightLeftIcon'),
	),
	ArrowsUpDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowsUpDownIcon'),
	),
	AtSymbolIcon: React.lazy(
		() => import('@heroicons/react/24/outline/AtSymbolIcon'),
	),
	BackspaceIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BackspaceIcon'),
	),
	BackwardIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BackwardIcon'),
	),
	BanknotesIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BanknotesIcon'),
	),
	Bars2Icon: React.lazy(() => import('@heroicons/react/24/outline/Bars2Icon')),
	Bars3BottomLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/Bars3BottomLeftIcon'),
	),
	Bars3BottomRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/Bars3BottomRightIcon'),
	),
	Bars3CenterLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/Bars3CenterLeftIcon'),
	),
	Bars3Icon: React.lazy(() => import('@heroicons/react/24/outline/Bars3Icon')),
	Bars4Icon: React.lazy(() => import('@heroicons/react/24/outline/Bars4Icon')),
	BarsArrowDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BarsArrowDownIcon'),
	),
	BarsArrowUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BarsArrowUpIcon'),
	),
	Battery0Icon: React.lazy(
		() => import('@heroicons/react/24/outline/Battery0Icon'),
	),
	Battery100Icon: React.lazy(
		() => import('@heroicons/react/24/outline/Battery100Icon'),
	),
	Battery50Icon: React.lazy(
		() => import('@heroicons/react/24/outline/Battery50Icon'),
	),
	BeakerIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BeakerIcon'),
	),
	BellAlertIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BellAlertIcon'),
	),
	BellSlashIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BellSlashIcon'),
	),
	BellSnoozeIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BellSnoozeIcon'),
	),
	BellIcon: React.lazy(() => import('@heroicons/react/24/outline/BellIcon')),
	BoltSlashIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BoltSlashIcon'),
	),
	BoltIcon: React.lazy(() => import('@heroicons/react/24/outline/BoltIcon')),
	BookOpenIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BookOpenIcon'),
	),
	BookmarkSlashIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BookmarkSlashIcon'),
	),
	BookmarkSquareIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BookmarkSquareIcon'),
	),
	BookmarkIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BookmarkIcon'),
	),
	BriefcaseIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BriefcaseIcon'),
	),
	BuildingLibraryIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BuildingLibraryIcon'),
	),
	BuildingOffice2Icon: React.lazy(
		() => import('@heroicons/react/24/outline/BuildingOffice2Icon'),
	),
	BuildingOfficeIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BuildingOfficeIcon'),
	),
	BuildingStorefrontIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BuildingStorefrontIcon'),
	),
	CakeIcon: React.lazy(() => import('@heroicons/react/24/outline/CakeIcon')),
	CalculatorIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CalculatorIcon'),
	),
	CalendarDaysIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CalendarDaysIcon'),
	),
	CalendarIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CalendarIcon'),
	),
	CameraIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CameraIcon'),
	),
	ChartBarSquareIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChartBarSquareIcon'),
	),
	ChartBarIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChartBarIcon'),
	),
	ChartPieIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChartPieIcon'),
	),
	ChatBubbleBottomCenterTextIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChatBubbleBottomCenterTextIcon'),
	),
	ChatBubbleBottomCenterIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChatBubbleBottomCenterIcon'),
	),
	ChatBubbleLeftEllipsisIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChatBubbleLeftEllipsisIcon'),
	),
	ChatBubbleLeftRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChatBubbleLeftRightIcon'),
	),
	ChatBubbleLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChatBubbleLeftIcon'),
	),
	ChatBubbleOvalLeftEllipsisIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChatBubbleOvalLeftEllipsisIcon'),
	),
	ChatBubbleOvalLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChatBubbleOvalLeftIcon'),
	),
	CheckBadgeIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CheckBadgeIcon'),
	),
	CheckCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CheckCircleIcon'),
	),
	CheckIcon: React.lazy(() => import('@heroicons/react/24/outline/CheckIcon')),
	ChevronDoubleDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChevronDoubleDownIcon'),
	),
	ChevronDoubleLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChevronDoubleLeftIcon'),
	),
	ChevronDoubleRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChevronDoubleRightIcon'),
	),
	ChevronDoubleUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChevronDoubleUpIcon'),
	),
	ChevronDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChevronDownIcon'),
	),
	ChevronLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChevronLeftIcon'),
	),
	ChevronRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChevronRightIcon'),
	),
	ChevronUpDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChevronUpDownIcon'),
	),
	ChevronUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChevronUpIcon'),
	),
	CircleStackIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CircleStackIcon'),
	),
	ClipboardDocumentCheckIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ClipboardDocumentCheckIcon'),
	),
	ClipboardDocumentListIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ClipboardDocumentListIcon'),
	),
	ClipboardDocumentIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ClipboardDocumentIcon'),
	),
	ClipboardIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ClipboardIcon'),
	),
	ClockIcon: React.lazy(() => import('@heroicons/react/24/outline/ClockIcon')),
	CloudArrowDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CloudArrowDownIcon'),
	),
	CloudArrowUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CloudArrowUpIcon'),
	),
	CloudIcon: React.lazy(() => import('@heroicons/react/24/outline/CloudIcon')),
	CodeBracketSquareIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CodeBracketSquareIcon'),
	),
	CodeBracketIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CodeBracketIcon'),
	),
	Cog6ToothIcon: React.lazy(
		() => import('@heroicons/react/24/outline/Cog6ToothIcon'),
	),
	Cog8ToothIcon: React.lazy(
		() => import('@heroicons/react/24/outline/Cog8ToothIcon'),
	),
	CogIcon: React.lazy(() => import('@heroicons/react/24/outline/CogIcon')),
	ComputerDesktopIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ComputerDesktopIcon'),
	),
	CpuChipIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CpuChipIcon'),
	),
	CreditCardIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CreditCardIcon'),
	),
	CubeTransparentIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CubeTransparentIcon'),
	),
	CubeIcon: React.lazy(() => import('@heroicons/react/24/outline/CubeIcon')),
	CurrencyBangladeshiIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CurrencyBangladeshiIcon'),
	),
	CurrencyDollarIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CurrencyDollarIcon'),
	),
	CurrencyEuroIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CurrencyEuroIcon'),
	),
	CurrencyPoundIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CurrencyPoundIcon'),
	),
	CurrencyRupeeIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CurrencyRupeeIcon'),
	),
	CurrencyYenIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CurrencyYenIcon'),
	),
	CursorArrowRaysIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CursorArrowRaysIcon'),
	),
	CursorArrowRippleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CursorArrowRippleIcon'),
	),
	DevicePhoneMobileIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DevicePhoneMobileIcon'),
	),
	DeviceTabletIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DeviceTabletIcon'),
	),
	DocumentArrowDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentArrowDownIcon'),
	),
	DocumentArrowUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentArrowUpIcon'),
	),
	DocumentChartBarIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentChartBarIcon'),
	),
	DocumentCheckIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentCheckIcon'),
	),
	DocumentDuplicateIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentDuplicateIcon'),
	),
	DocumentMagnifyingGlassIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentMagnifyingGlassIcon'),
	),
	DocumentMinusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentMinusIcon'),
	),
	DocumentPlusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentPlusIcon'),
	),
	DocumentTextIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentTextIcon'),
	),
	DocumentIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentIcon'),
	),
	EllipsisHorizontalCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/EllipsisHorizontalCircleIcon'),
	),
	EllipsisHorizontalIcon: React.lazy(
		() => import('@heroicons/react/24/outline/EllipsisHorizontalIcon'),
	),
	EllipsisVerticalIcon: React.lazy(
		() => import('@heroicons/react/24/outline/EllipsisVerticalIcon'),
	),
	EnvelopeOpenIcon: React.lazy(
		() => import('@heroicons/react/24/outline/EnvelopeOpenIcon'),
	),
	EnvelopeIcon: React.lazy(
		() => import('@heroicons/react/24/outline/EnvelopeIcon'),
	),
	ExclamationCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ExclamationCircleIcon'),
	),
	ExclamationTriangleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ExclamationTriangleIcon'),
	),
	EyeSlashIcon: React.lazy(
		() => import('@heroicons/react/24/outline/EyeSlashIcon'),
	),
	EyeIcon: React.lazy(() => import('@heroicons/react/24/outline/EyeIcon')),
	FaceFrownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/FaceFrownIcon'),
	),
	FaceSmileIcon: React.lazy(
		() => import('@heroicons/react/24/outline/FaceSmileIcon'),
	),
	FilmIcon: React.lazy(() => import('@heroicons/react/24/outline/FilmIcon')),
	FingerPrintIcon: React.lazy(
		() => import('@heroicons/react/24/outline/FingerPrintIcon'),
	),
	FireIcon: React.lazy(() => import('@heroicons/react/24/outline/FireIcon')),
	FlagIcon: React.lazy(() => import('@heroicons/react/24/outline/FlagIcon')),
	FolderArrowDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/FolderArrowDownIcon'),
	),
	FolderMinusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/FolderMinusIcon'),
	),
	FolderOpenIcon: React.lazy(
		() => import('@heroicons/react/24/outline/FolderOpenIcon'),
	),
	FolderPlusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/FolderPlusIcon'),
	),
	FolderIcon: React.lazy(
		() => import('@heroicons/react/24/outline/FolderIcon'),
	),
	ForwardIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ForwardIcon'),
	),
	FunnelIcon: React.lazy(
		() => import('@heroicons/react/24/outline/FunnelIcon'),
	),
	GifIcon: React.lazy(() => import('@heroicons/react/24/outline/GifIcon')),
	GiftTopIcon: React.lazy(
		() => import('@heroicons/react/24/outline/GiftTopIcon'),
	),
	GiftIcon: React.lazy(() => import('@heroicons/react/24/outline/GiftIcon')),
	GlobeAltIcon: React.lazy(
		() => import('@heroicons/react/24/outline/GlobeAltIcon'),
	),
	GlobeAmericasIcon: React.lazy(
		() => import('@heroicons/react/24/outline/GlobeAmericasIcon'),
	),
	GlobeAsiaAustraliaIcon: React.lazy(
		() => import('@heroicons/react/24/outline/GlobeAsiaAustraliaIcon'),
	),
	GlobeEuropeAfricaIcon: React.lazy(
		() => import('@heroicons/react/24/outline/GlobeEuropeAfricaIcon'),
	),
	HandRaisedIcon: React.lazy(
		() => import('@heroicons/react/24/outline/HandRaisedIcon'),
	),
	HandThumbDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/HandThumbDownIcon'),
	),
	HandThumbUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/HandThumbUpIcon'),
	),
	HashtagIcon: React.lazy(
		() => import('@heroicons/react/24/outline/HashtagIcon'),
	),
	HeartIcon: React.lazy(() => import('@heroicons/react/24/outline/HeartIcon')),
	HomeModernIcon: React.lazy(
		() => import('@heroicons/react/24/outline/HomeModernIcon'),
	),
	HomeIcon: React.lazy(() => import('@heroicons/react/24/outline/HomeIcon')),
	IdentificationIcon: React.lazy(
		() => import('@heroicons/react/24/outline/IdentificationIcon'),
	),
	InboxArrowDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/InboxArrowDownIcon'),
	),
	InboxStackIcon: React.lazy(
		() => import('@heroicons/react/24/outline/InboxStackIcon'),
	),
	InboxIcon: React.lazy(() => import('@heroicons/react/24/outline/InboxIcon')),
	InformationCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/InformationCircleIcon'),
	),
	KeyIcon: React.lazy(() => import('@heroicons/react/24/outline/KeyIcon')),
	LanguageIcon: React.lazy(
		() => import('@heroicons/react/24/outline/LanguageIcon'),
	),
	LifebuoyIcon: React.lazy(
		() => import('@heroicons/react/24/outline/LifebuoyIcon'),
	),
	LightBulbIcon: React.lazy(
		() => import('@heroicons/react/24/outline/LightBulbIcon'),
	),
	LinkIcon: React.lazy(() => import('@heroicons/react/24/outline/LinkIcon')),
	ListBulletIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ListBulletIcon'),
	),
	LockClosedIcon: React.lazy(
		() => import('@heroicons/react/24/outline/LockClosedIcon'),
	),
	LockOpenIcon: React.lazy(
		() => import('@heroicons/react/24/outline/LockOpenIcon'),
	),
	MagnifyingGlassCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MagnifyingGlassCircleIcon'),
	),
	MagnifyingGlassMinusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MagnifyingGlassMinusIcon'),
	),
	MagnifyingGlassPlusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MagnifyingGlassPlusIcon'),
	),
	MagnifyingGlassIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MagnifyingGlassIcon'),
	),
	MapPinIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MapPinIcon'),
	),
	MapIcon: React.lazy(() => import('@heroicons/react/24/outline/MapIcon')),
	MegaphoneIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MegaphoneIcon'),
	),
	MicrophoneIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MicrophoneIcon'),
	),
	MinusCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MinusCircleIcon'),
	),
	MinusSmallIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MinusSmallIcon'),
	),
	MinusIcon: React.lazy(() => import('@heroicons/react/24/outline/MinusIcon')),
	MoonIcon: React.lazy(() => import('@heroicons/react/24/outline/MoonIcon')),
	MusicalNoteIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MusicalNoteIcon'),
	),
	NewspaperIcon: React.lazy(
		() => import('@heroicons/react/24/outline/NewspaperIcon'),
	),
	NoSymbolIcon: React.lazy(
		() => import('@heroicons/react/24/outline/NoSymbolIcon'),
	),
	PaintBrushIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PaintBrushIcon'),
	),
	PaperAirplaneIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PaperAirplaneIcon'),
	),
	PaperClipIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PaperClipIcon'),
	),
	PauseIcon: React.lazy(() => import('@heroicons/react/24/outline/PauseIcon')),
	PencilSquareIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PencilSquareIcon'),
	),
	PencilIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PencilIcon'),
	),
	PhoneArrowDownLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PhoneArrowDownLeftIcon'),
	),
	PhoneArrowUpRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PhoneArrowUpRightIcon'),
	),
	PhoneXMarkIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PhoneXMarkIcon'),
	),
	PhoneIcon: React.lazy(() => import('@heroicons/react/24/outline/PhoneIcon')),
	PhotoIcon: React.lazy(() => import('@heroicons/react/24/outline/PhotoIcon')),
	PlayPauseIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PlayPauseIcon'),
	),
	PlayIcon: React.lazy(() => import('@heroicons/react/24/outline/PlayIcon')),
	PlusCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PlusCircleIcon'),
	),
	PlusSmallIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PlusSmallIcon'),
	),
	PlusIcon: React.lazy(() => import('@heroicons/react/24/outline/PlusIcon')),
	PresentationChartBarIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PresentationChartBarIcon'),
	),
	PresentationChartLineIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PresentationChartLineIcon'),
	),
	PrinterIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PrinterIcon'),
	),
	PuzzlePieceIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PuzzlePieceIcon'),
	),
	QrCodeIcon: React.lazy(
		() => import('@heroicons/react/24/outline/QrCodeIcon'),
	),
	QuestionMarkCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/QuestionMarkCircleIcon'),
	),
	QueueListIcon: React.lazy(
		() => import('@heroicons/react/24/outline/QueueListIcon'),
	),
	RadioIcon: React.lazy(() => import('@heroicons/react/24/outline/RadioIcon')),
	ReceiptPercentIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ReceiptPercentIcon'),
	),
	ReceiptRefundIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ReceiptRefundIcon'),
	),
	RectangleGroupIcon: React.lazy(
		() => import('@heroicons/react/24/outline/RectangleGroupIcon'),
	),
	RectangleStackIcon: React.lazy(
		() => import('@heroicons/react/24/outline/RectangleStackIcon'),
	),
	RssIcon: React.lazy(() => import('@heroicons/react/24/outline/RssIcon')),
	ScaleIcon: React.lazy(() => import('@heroicons/react/24/outline/ScaleIcon')),
	ScissorsIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ScissorsIcon'),
	),
	ServerStackIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ServerStackIcon'),
	),
	ServerIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ServerIcon'),
	),
	ShareIcon: React.lazy(() => import('@heroicons/react/24/outline/ShareIcon')),
	ShieldCheckIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ShieldCheckIcon'),
	),
	ShieldExclamationIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ShieldExclamationIcon'),
	),
	ShoppingBagIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ShoppingBagIcon'),
	),
	ShoppingCartIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ShoppingCartIcon'),
	),
	SignalSlashIcon: React.lazy(
		() => import('@heroicons/react/24/outline/SignalSlashIcon'),
	),
	SignalIcon: React.lazy(
		() => import('@heroicons/react/24/outline/SignalIcon'),
	),
	SparklesIcon: React.lazy(
		() => import('@heroicons/react/24/outline/SparklesIcon'),
	),
	SpeakerWaveIcon: React.lazy(
		() => import('@heroicons/react/24/outline/SpeakerWaveIcon'),
	),
	SpeakerXMarkIcon: React.lazy(
		() => import('@heroicons/react/24/outline/SpeakerXMarkIcon'),
	),
	Square2StackIcon: React.lazy(
		() => import('@heroicons/react/24/outline/Square2StackIcon'),
	),
	Squares2X2Icon: React.lazy(
		() => import('@heroicons/react/24/outline/Squares2X2Icon'),
	),
	SquaresPlusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/SquaresPlusIcon'),
	),
	StarIcon: React.lazy(() => import('@heroicons/react/24/outline/StarIcon')),
	StopIcon: React.lazy(() => import('@heroicons/react/24/outline/StopIcon')),
	SunIcon: React.lazy(() => import('@heroicons/react/24/outline/SunIcon')),
	SwatchIcon: React.lazy(
		() => import('@heroicons/react/24/outline/SwatchIcon'),
	),
	TableCellsIcon: React.lazy(
		() => import('@heroicons/react/24/outline/TableCellsIcon'),
	),
	TagIcon: React.lazy(() => import('@heroicons/react/24/outline/TagIcon')),
	TicketIcon: React.lazy(
		() => import('@heroicons/react/24/outline/TicketIcon'),
	),
	TrashIcon: React.lazy(() => import('@heroicons/react/24/outline/TrashIcon')),
	TruckIcon: React.lazy(() => import('@heroicons/react/24/outline/TruckIcon')),
	UserCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/UserCircleIcon'),
	),
	UserGroupIcon: React.lazy(
		() => import('@heroicons/react/24/outline/UserGroupIcon'),
	),
	UserMinusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/UserMinusIcon'),
	),
	UserPlusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/UserPlusIcon'),
	),
	UserIcon: React.lazy(() => import('@heroicons/react/24/outline/UserIcon')),
	UsersIcon: React.lazy(() => import('@heroicons/react/24/outline/UsersIcon')),
	VariableIcon: React.lazy(
		() => import('@heroicons/react/24/outline/VariableIcon'),
	),
	VideoCameraSlashIcon: React.lazy(
		() => import('@heroicons/react/24/outline/VideoCameraSlashIcon'),
	),
	VideoCameraIcon: React.lazy(
		() => import('@heroicons/react/24/outline/VideoCameraIcon'),
	),
	ViewColumnsIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ViewColumnsIcon'),
	),
	WalletIcon: React.lazy(
		() => import('@heroicons/react/24/outline/WalletIcon'),
	),
	WifiIcon: React.lazy(() => import('@heroicons/react/24/outline/WifiIcon')),
	WrenchScrewdriverIcon: React.lazy(
		() => import('@heroicons/react/24/outline/WrenchScrewdriverIcon'),
	),
	WrenchIcon: React.lazy(
		() => import('@heroicons/react/24/outline/WrenchIcon'),
	),
	XCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/XCircleIcon'),
	),
	XMarkIcon: React.lazy(() => import('@heroicons/react/24/outline/XMarkIcon')),
};
